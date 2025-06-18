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
      p {
        text-align: right;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: -0.5px;
      }
    }

    .textb3 {
      width: 100%;
      max-width: 1300px;
      height: 200px;
      position: absolute;
      bottom: 0px;
      left: 50%; transform: translateX(-48%);
      text-align: center;
      /* margin: 0 auto; */
      /* outline: 1px dotted red; */

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
    }
  }
`;

const frontImages = [
  '/img/card1.png', '/img/card2.png', '/img/card3.png', '/img/card4.png',
  '/img/card5.png', '/img/card6.png', '/img/card7.png', '/img/card8.png',
  '/img/card17.png', '/img/card18.png', '/img/card19.png',
  // '/img/card20.png'
];
const backImages = [
  '/img/card9.png', '/img/card10.png', '/img/card11.png', '/img/card12.png',
  '/img/card13.png', '/img/card14.png', '/img/card15.png', '/img/card16.png',
  '/img/card21.png', '/img/card22.png', '/img/card23.png',
  // '/img/card24.png'
];

function Card({ frontTexture, backTexture, index, total }) {
  const radius = 1;
  const angle = (index / total) * Math.PI * 2;
  
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  // 커서 변경
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
      groupRef.current.rotation.y += 0.002; // ← 반시계 방향 회전
    }
  });

  return (
    <group 
       ref={groupRef}
      onPointerOver={onPointerOver} 
      onPointerOut={onPointerOut}
      >
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
    }, 2000); //
  };

  return (
    <>
      <Mainbox>
        <div className="maininner">
          <div className="textb1">
            <p>GUMIGOMI STUDIO</p>
          </div>
          <div className="textb2">
           {/*  <p>
             Powerful benefits and low annual fees. Compare with other card companies and decide. We will always strive to provide better service.
            </p> */}
             <p>
             합리적인 연회비, 강력한 생활 혜택<br/>
             일상 속 모든 소비에 특별함을 더합니다<br/>
             CARDFACTORY는 더 나은 금융 경험을 만들어갑니다 
            </p>
          </div>
          <div className="textb3">
            <p>고민은 줄이고, 혜택은 키우고</p>
          </div>
          <Canvas camera={{ position: [0, 2, 5], fov: 55 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={2} />
              <Cards
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
              />
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
