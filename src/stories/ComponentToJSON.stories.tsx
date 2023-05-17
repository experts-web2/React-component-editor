import React from "react";
import { Story, Meta } from "@storybook/react";
import ComponentToJSON from "../components/ComponentToJson";

export default {
  title: "ComponentToJSON",
  component: ComponentToJSON,
} as Meta;

const Template: Story<any> = (args) => <ComponentToJSON {...args} />;

export const Default = Template.bind({});
Default.args = {
  reactCode: "",
  generateJsonCode: (jsonCode: any) => {},
};

export const ComponentView = Template.bind({});
ComponentView.args = {
  reactCode: `        import React, { useState } from 'react'
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
      
            export default StudentsDataComponent;
    `,
  generateJsonCode: (jsonCode: any) => {
    // Custom logic for generating JSON code
  },
};

export const JsonView = Template.bind({});
JsonView.args = {
  reactCode: `        import React, { useState } from 'react'
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
            {
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
              };
    `,
  generateJsonCode: (jsonCode: any) => {},
};
