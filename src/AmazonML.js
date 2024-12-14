import { Buffer } from "buffer";
import { RekognitionClient } from "@aws-sdk/client-rekognition";

const creds = {
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    sessionToken: import.meta.env.VITE_AWS_SESSION_TOKEN, // leave out if not in hosted workshop
  },
};

export async function analyzeImageML(type, imageData) {
  const returnData = {
    type: "warning",
    text: "This feature has not been implemented yet!",
  };
  return JSON.stringify(returnData);
}

// imageData is string with data:application/octet-stream;base64,...
function base64ToUint8Array(base64Data) {
  const decoded = Buffer.from(base64Data, "base64");
  const bytes = new Uint8Array(
    decoded.buffer,
    decoded.byteOffset,
    decoded.byteLength
  );
  return bytes;
}