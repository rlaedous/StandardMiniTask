import React from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons(
  /* 필요한 props를 여기에 전달하세요 */ {
    filteredStudents,
    setFilteredStudents,
  }
) {
  const filterByAge = (minAge) => {
    const filterAge = filteredStudents.filter((x) => x.age >= minAge);
    setFilteredStudents(filterAge);
  };
  const filterByGrade = (grade) => {
    const filterGrade = filteredStudents.filter((x) => x.grade === grade);
    setFilteredStudents(filterGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(filteredStudents);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={() => filterByAge()}>18세 이상</button>
      <button onClick={() => filterByGrade()}>A등급</button>
      <button onClick={() => resetFilter()}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
