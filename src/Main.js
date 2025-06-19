import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Body1 from './body1';

const Mainbox = styled.div`
  width: 95vw;
  height: 100vh;
  position: relative;

  .maininner {
    width: 100%;
    max-width: 1300px;
    height: 100vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .textb1 {
      width: 600px;
      height: 200px;
      position: absolute;
      top: 80px;
      padding-left: 30px;
      left: 0px;
      p {
        font-size: 22px;
        font-weight: 700;
      }
    }

    .textb2 {
      width: 600px;
      height: 200px;
      position: absolute;
      top: 80px;
      right: -30px;
        @media screen and (max-width: 1000px) {
            right: 0px;
        }
      p {
        text-align: right;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: -0.5px;
         
          @media screen and (max-width: 800px) {
            font-size: 18px;
        }
         @media screen and (max-width: 660px) {
            font-size: 14px;
            line-height: 22px;
        }
      }
    }

    .textb3 {
      width: 100%;
      max-width: 1300px;
      height: 200px;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-48%);
      text-align: center;

      p {
        font-size: clamp(24px, 6.5vw, 90px);
        font-weight: 600;
        margin: 0;
        line-height: 1.1;
        word-break: keep-all;
        letter-spacing: -3px;
      }
    }

    canvas {
      display: block;
      margin-left: 40px;
      @media screen and (max-width:1000px) {
        scale: 0.8;
      }
       @media screen and (max-width:690px) {
        scale: 0.75;
      }
    }
  }
`;

// ✅ 이미지 경로 수정 (webp 확장자)
const frontImages = [
  `${process.env.PUBLIC_URL}/img/card1.webp`,
  `${process.env.PUBLIC_URL}/img/card2.webp`,
  `${process.env.PUBLIC_URL}/img/card3.webp`,
  `${process.env.PUBLIC_URL}/img/card4.webp`,
  `${process.env.PUBLIC_URL}/img/card5.webp`,
  `${process.env.PUBLIC_URL}/img/card6.webp`,
  `${process.env.PUBLIC_URL}/img/card7.webp`,
  `${process.env.PUBLIC_URL}/img/card8.webp`,
  `${process.env.PUBLIC_URL}/img/card17.webp`,
  `${process.env.PUBLIC_URL}/img/card18.webp`,
  `${process.env.PUBLIC_URL}/img/card19.webp`,
];

const backImages = [
  `${process.env.PUBLIC_URL}/img/card9.webp`,
  `${process.env.PUBLIC_URL}/img/card10.webp`,
  `${process.env.PUBLIC_URL}/img/card11.webp`,
  `${process.env.PUBLIC_URL}/img/card12.webp`,
  `${process.env.PUBLIC_URL}/img/card13.webp`,
  `${process.env.PUBLIC_URL}/img/card14.webp`,
  `${process.env.PUBLIC_URL}/img/card15.webp`,
  `${process.env.PUBLIC_URL}/img/card16.webp`,
  `${process.env.PUBLIC_URL}/img/card21.webp`,
  `${process.env.PUBLIC_URL}/img/card22.webp`,
  `${process.env.PUBLIC_URL}/img/card23.webp`,
];

function Card({ frontTexture, backTexture, index, total }) {
  const radius = 1;
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  const handlePointerOver = () => {
    document.body.style.cursor = 'grab';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'default';
  };

  return (
    <group
      position={[x, 0.4, z]}
      rotation={[0, -angle, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[1.6, 1]} />
        <meshBasicMaterial
          map={frontTexture}
          toneMapped={false}
          transparent
          alphaTest={0.5}
        />
      </mesh>
      <mesh position={[0, 0, -0.001]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.6, 1]} />
        <meshBasicMaterial
          map={backTexture}
          toneMapped={false}
          transparent
          alphaTest={0.5}
        />
      </mesh>
    </group>
  );
}

function Cards({ onPointerOver, onPointerOut }) {
  const groupRef = useRef();
  const frontTextures = useTexture(frontImages);
  const backTextures = useTexture(backImages);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      {frontTextures.map((front, i) => (
        <Card
          key={i}
          frontTexture={front}
          backTexture={backTextures[i]}
          index={i}
          total={frontTextures.length}
        />
      ))}
    </group>
  );
}

function ControlledOrbitControls({ enableControl }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false}
      enablePan={false}
      enabled={enableControl}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: null,
        RIGHT: null,
      }}
      minPolarAngle={Math.PI / 3.5}
      maxPolarAngle={Math.PI / 1.5}
    />
  );
}

const Main = () => {
  const [enableControl, setEnableControl] = useState(false);
  const timeoutRef = useRef();

  const handlePointerOver = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setEnableControl(true);
  };

  const handlePointerOut = () => {
    timeoutRef.current = setTimeout(() => {
      setEnableControl(false);
    }, 2000);
  };

  return (
    <>
      <Mainbox>
        <div className="maininner">
          <div className="textb1">
            <p>GUMIGOMI STUDIO</p>
          </div>
          <div className="textb2">
            <p>
              합리적인 연회비, 강력한 생활 혜택<br />
              일상 속 모든 소비에 특별함을 더합니다<br />
              CARDFACTORY는 더 나은 금융 경험을 만들어갑니다
            </p>
          </div>
          <div className="textb3">
            <p>고민은 줄이고, 혜택은 키우고</p>
          </div>
          <Canvas camera={{ position: [0, 2, 5], fov: 55 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={2} />
              <Cards onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} />
              <ControlledOrbitControls enableControl={enableControl} />
            </Suspense>
          </Canvas>
        </div>
      </Mainbox>
      <Body1 />
    </>
  );
};

export default Main;
