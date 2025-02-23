import { React, useState } from "react"
import { Container, Center, Title, Stack, Select } from "@mantine/core";

function Display() {

  const [unitData] = useState(['kg/cal', 'lb/cal', 'kg/lb', 'lb/kg']);
  const [fontSizeData] = useState(['small', 'medium', 'large']);
  const [themeData] = useState(['default', 'dark', 'light']);

  const currentData = {
    unit: 'kg/cal',
    fontSize: 'medium',
    theme: 'default'
  };


  return (
    <>
      <div>
        <Container 
          style={{marginTop:100}}
        >

        </Container>

        <Stack
          justify="space-around" 
          sx={() => ({ height: 300 })}
          align='center'
          style={{marginTop:50}}
        >
          <Select 
            label='Units'
            data={unitData}
            placeholder={currentData.unit}
          />

          <Select 
            label='Font Size'
            data={fontSizeData}
            placeholder={currentData.fontSize}
          />

          <Select 
            label='Theme'
            data={themeData}
            placeholder={currentData.theme}
          />
        </Stack>
      </div>
    </>
  ); }

  export default Display;