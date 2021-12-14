// pages/index.tsx

import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    // 지도 객체를 map이라는 이름의 변수에 담았습니다.
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.525081859346535, 126.97980674644279),
      zoom: 14,
    });
    // (1) naver.maps.Marker 클래스는 지도 위에 올리는 마커를 정의합니다.
    // 사용 예시: new naver.maps.Marker(options)
    // options: 이 객체는 Marker를 정의하는 옵션을 나타냅니다.
    // options 에는 마커의 위치를 나타내는 지도 좌표인 position 이 필수로 들어가야 하고,
    // 마커를 표시할 Map 객체가 필요합니다.
    // 위에서 new naver.maps.Map()으로 만든 객체를 변수 map에 담아,
    // Marker의 options 객체 속성인 map에 지도 객체를 전달합니다.
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.525081859346535, 126.97980674644279),
      map: map, // map: map은 축약해서 map 으로도 사용할 수 있습니다.
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Hello Next.js</h1>
      <Box
        id="map"
        sx={{
          width: 500,
          height: 500,
        }}
      ></Box>
    </Box>
  );
};

export default Home;
