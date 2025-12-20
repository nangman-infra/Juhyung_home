import { Intro } from "@/domains/home/components/intro";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Intro />
      {/* 추가 섹션(기술 스택 , 포스트 등) */}
    </div>
  );
}
