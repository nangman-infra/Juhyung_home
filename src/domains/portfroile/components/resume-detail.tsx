export default function ResumeDetail() {
  return (
    <div className="space-y-12">
      {/*경력*/}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Experience</h2>
        <div className="space-y-4">
         
        </div>
      </section>

      {/* 학력 */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">한밭대학교 모바일융합공학과 학부 2학년 재학</h3>
            <p className="text-sm text-muted-foreground">2022.03 - 2027.12 졸업 예정</p>
          </div>
        </div>
      </section>
    </div>
  );
}
