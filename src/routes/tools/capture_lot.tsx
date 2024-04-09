import { 
  Form,
  useLoaderData,
  redirect,
} from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';

const videoWidth  = 500;
const videoHeight = 500;
const videoFrameRate = 5;

const constraints:MediaStreamConstraints = {
  audio: false,
  video: {
    width:  { min: 400, ideal: 800, max: 1270 },
    height: { min: 300 , ideal: 600, max: 720 } ,
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

export async function loader({ params }:loaderProps) : Promise<any> {
  console.debug('@params:'+JSON.stringify(params));
  //  const contact = await getContact(params.contactId);
  return null;
}

const QRCodeScanner = () => {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<number>();
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const [isContinue, setIsContinue] = useState<boolean>(false);
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
    <div className="App">
      <p>QR Code Scanner</p>
      <div style={{ display: 'grid' }}>
        <div>
          <video autoPlay playsInline={true} ref={videoRef} style={{ width: '100%' }}>
            <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
          </video>
        </div>
        <div>
          <p>{qrCodeData.join('\n')}</p>
        </div>
        <div>
          <button onClick={handleStart}>Start Scan</button>
          <button onClick={handleStop}>Stop Scan</button>
        </div>
      </div>
      hello QRCodeScanner
    </div>
  );
}

interface CaptureLotProps {
  onClose: (result: string) => void; // return value type : string
}


export const CaptureLot: React.FC<CaptureLotProps> = ({onClose}) => {
  //  const contact = useLoaderData();
  console.debug('@CaptureLot');

  return (
    <div id="cam">
      <div>
        <h1>CAM</h1>


      </div>

      <button onClick={() => onClose('This is LOT!')}>閉じる</button>
    </div>
  );
}
