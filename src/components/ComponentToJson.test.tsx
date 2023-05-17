import React from "react";
import { render, screen } from "@testing-library/react";
import { generateReactComponent } from "../utils/utils";

test('generateReactComponent returns valid component code', () => {
  const json = `{
    "componentName": "StudentsDataComponent",
    "props": [
      {
        "key": ""
      }
    ],
    "propsDefaults": [
      {
        "key": ""
      }
    ],
    "imports": [
      "import React, { useState } from 'react'",
      "import StudentsPicker from '../components/StudentsPicker'",
      "import StudentsTable from '../components/StudentsTable'",
      "import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from '../utils'"
    ],
    "content": "            <>      <StudentsPicker onPickHandler={onStudentsPick} />      <StudentsTable        studentsData={studentsData}        schoolsData={schoolsData}        legalguardiansData={legalguardiansData}      />    </>          "
  }`;

  const componentCode = generateReactComponent(json);
  expect(componentCode).toContain(`import React, { useState } from 'react'`)

});