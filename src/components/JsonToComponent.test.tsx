import React from "react";
import { render, screen } from "@testing-library/react";
import { convertComponentToJSON } from "../utils/utils";

test("convertComponentToJSON returns valid Json code", () => {
  const json = `import React, { useState } from 'react'
  import StudentsPicker from '../components/StudentsPicker'
  import StudentsTable from '../components/StudentsTable'
  import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from '../utils'
    
          const StudentsDataComponent = ({
          }) => {
            return (
              <>      <StudentsPicker onPickHandler={onStudentsPick} />      <StudentsTable        studentsData={studentsData}        schoolsData={schoolsData}        legalguardiansData={legalguardiansData}      />    </>
            );
          };
    
          StudentsDataComponent.propTypes = {
          
          };
    
          StudentsDataComponent.defaultProps = {
          
          };
    
          export default StudentsDataComponent;`;

  const componentCode = convertComponentToJSON(json);
  expect(componentCode).toHaveProperty(
    "componentName",
    "StudentsDataComponent"
  );
});
