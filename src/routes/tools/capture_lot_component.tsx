import { 
  Form,
  redirect,
} from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const videoWidth  = 500;
const videoHeight = 500;
const videoFrameRate = 5;

const constraints:MediaStreamConstraints = {
  audio: false,
  video: {
    width:  { min: 500, ideal: 800, max: 1270 },
    height: { min: 400 , ideal: 600, max: 720 } ,
    frameRate: {
      max: videoFrameRate,
    }//,
    // facingMode: {
    //   exact: 'environment',
    // },
  },
};

interface loaderProps {
  params: string;
}

const QRCodeScanner:React.FC<CaptureLotProps> = ({onClose}) => {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<number>();
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const [isContinue, setIsContinue] = useState<boolean>(true);
  const [qrCodeData, setQrCodeData] = useState<string[]>([]);

  useEffect(() => {
    const openCamera = async () => {
      const video = videoRef.current;
      if (video) {
        video.addEventListener('play', (event) => { console.log(event); console.log("(w,h)=(", video.videoWidth, ", " + video.videoHeight, ")") })
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
      }
    };
    openCamera();
  }, [])

  useEffect(() => {
    if (!isContinue) {
      return;
    }

    const decodeQRCode = () => {
      const context = canvasRef?.current?.getContext('2d');
      const video = videoRef?.current;

      if (!context || !video) {
        return;
      }

      context.beginPath();
      context.fillStyle = 'rgb( 0, 0, 0)';
      context.fillRect(0, 0, 100, 200);

      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
      const code = jsQR(imageData.data, videoWidth, videoHeight);

      return code?.data;
    };

    const intervalId = window.setInterval(() => {
      const decodedValue = decodeQRCode();

      if (!decodedValue || qrCodeData.includes(decodedValue)) {
        return;
      }

      setQrCodeData([...qrCodeData, decodedValue]);

    }, 1_000 / videoFrameRate);
    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isContinue, qrCodeData]);
  
  const handleStart = () => {
    setIsContinue(true);
  };

  const handleStop = () => {
    setIsContinue(false);
  };

  return (
    <div style={{ display: 'grid' }}>
      <div>
        <video autoPlay playsInline={true} ref={videoRef} style={{ width: '100%' }}>
          <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
        </video>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            <Grid xs>
              { qrCodeData.length == 0 ? ( <CircularProgress /> ) : '' }
            </Grid>
            <Grid xs={6}>
              <Typography>
                {qrCodeData}
              </Typography>
            </Grid>
            <Grid xs>
              <Button onClick={() => onClose( qrCodeData.join(' ') )}>閉じる</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

interface CaptureLotProps {
  onClose: (result: string) => void; // return value type : string
}

export const CaptureLotComponent: React.FC<CaptureLotProps> = ({onClose}) => {
  return (
    <div>
      <QRCodeScanner onClose={onClose}/>
    </div>
  );
}
