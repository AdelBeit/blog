import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler() {
  const imageData = await fetch('/assets/static/P1022591.png').then(
    (res) => res.arrayBuffer(),
  );
  const base64String = Buffer.from(imageData).toString('base64')
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width="256" height="256" src={base64String} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}