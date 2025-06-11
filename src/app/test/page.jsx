import Checkbox from '@/components/newForm/Checkbox'
import Datepicker from '@/components/newForm/Datepicker'
import Email from '@/components/newForm/Email'
import Form from '@/components/newForm/Form'
import Mobile from '@/components/newForm/Mobile'
import Radiobutton from '@/components/newForm/Radiobutton'
import Select from '@/components/newForm/Select'
import Textfield from '@/components/newForm/Textfield'
import React from 'react'


const options = [
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3" },
    { value: "Option 4" },
  ];
const radioGroup = [{ value: "Male" }, { value: "Female" }];

export default function page() {
  return (<form>
  <Textfield placeholder={"Enter First Name "}>First Name</Textfield>
  <Select options={options}>Select</Select>
  <Checkbox>text for checkbox</Checkbox>
  <Radiobutton radioGroup={radioGroup}>Gender</Radiobutton>
    <Datepicker>Date of Birth</Datepicker>
    <Email/>
    <Mobile/>






    <input type='submit' className='absolute bottom-0 right-0 m-10 border bg-gray-800 text-white px-10 py-3 rounded-3xl  hover:bg-gray-700'/>
  </form>  
  )
}

