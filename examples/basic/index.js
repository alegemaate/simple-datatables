import React, { useState } from 'react';
import SimpleTable from '../../src';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function Basic() {
  const [dense, setDense] = useState(true);

  const columns = [
    {
      label: 'Name',
      name: 'name',
      options: {
        filter: true,
        display: 'excluded',
      },
    },
    {
      label: 'Modified Title Label',
      name: 'title',
      options: {
        filter: true,
      },
    },
    {
      label: 'Location',
      name: 'location',
      options: {
        print: false,
        filter: false,
      },
    },
    {
      label: 'Age',
      name: 'age',
      options: {
        filter: true,
        print: false,
      },
    },
    {
      label: 'Salary',
      name: 'salary',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: 'Gabby George', title: 'Business Analyst', location: 'Minneapolis', age: 30, salary: '$100,000' },
    { name: 'Aiden Lloyd', title: 'Business Consultant', location: 'Dallas', age: 55, salary: '$200,000' },
    { name: 'Jaden Collins', title: 'Attorney', location: 'Santa Ana', age: 27, salary: '$500,000' },
    { name: 'Franky Rees', title: 'Business Analyst', location: 'St. Petersburg', age: 22, salary: '$50,000' },
    { name: 'Aaren Rose', title: 'Business Consultant', location: 'Toledo', age: 28, salary: '$75,000' },
    { name: 'Blake Duncan', title: 'Business Management Analyst', location: 'San Diego', age: 65, salary: '$94,000' },
    { name: 'Frankie Parry', title: 'Agency Legal Counsel', location: 'Jacksonville', age: 71, salary: '$210,000' },
    { name: 'Lane Wilson', title: 'Commercial Specialist', location: 'Omaha', age: 19, salary: '$65,000' },
    { name: 'Robin Duncan', title: 'Business Analyst', location: 'Los Angeles', age: 20, salary: '$77,000' },
    { name: 'Mel Brooks', title: 'Business Consultant', location: 'Oklahoma City', age: 37, salary: '$135,000' },
    { name: 'Harper White', title: 'Attorney', location: 'Pittsburgh', age: 52, salary: '$420,000' },
    { name: 'Kris Humphrey', title: 'Agency Legal Counsel', location: 'Laredo', age: 30, salary: '$150,000' },
    { name: 'Frankie Long', title: 'Industrial Analyst', location: 'Austin', age: 31, salary: '$170,000' },
    { name: 'Brynn Robbins', title: 'Business Analyst', location: 'Norfolk', age: 22, salary: '$90,000' },
    { name: 'Justice Mann', title: 'Business Consultant', location: 'Chicago', age: 24, salary: '$133,000' },
    { name: 'Addison Navarro', title: 'Business Analyst', location: 'New York', age: 50, salary: '$295,000' },
    { name: 'Jesse Welch', title: 'Agency Legal Counsel', location: 'Seattle', age: 28, salary: '$200,000' },
    { name: 'Eli Mejia', title: 'Commercial Specialist', location: 'Long Beach', age: 65, salary: '$400,000' },
    { name: 'Gene Leblanc', title: 'Industrial Analyst', location: 'Hartford', age: 34, salary: '$110,000' },
    { name: 'Danny Leon', title: 'Computer Scientist', location: 'Newark', age: 60, salary: '$220,000' },
    { name: 'Lane Lee', title: 'Corporate Counselor', location: 'Cincinnati', age: 52, salary: '$180,000' },
    { name: 'Jesse Hall', title: 'Business Analyst', location: 'Baltimore', age: 44, salary: '$99,000' },
    { name: 'Danni Hudson', title: 'Agency Legal Counsel', location: 'Tampa', age: 37, salary: '$90,000' },
    { name: 'Terry Macdonald', title: 'Commercial Specialist', location: 'Miami', age: 39, salary: '$140,000' },
    { name: 'Justice Mccarthy', title: 'Attorney', location: 'Tucson', age: 26, salary: '$330,000' },
    { name: 'Silver Carey', title: 'Computer Scientist', location: 'Memphis', age: 47, salary: '$250,000' },
    { name: 'Franky Miles', title: 'Industrial Analyst', location: 'Buffalo', age: 49, salary: '$190,000' },
    { name: 'Glen Nixon', title: 'Corporate Counselor', location: 'Arlington', age: 44, salary: '$80,000' },
    { name: 'Gabby Strickland', title: 'Business Consultant', location: 'Scottsdale', age: 26, salary: '$45,000' },
    { name: 'Mason Ray', title: 'Computer Scientist', location: 'San Francisco', age: 39, salary: '$142,000' },
  ];

  const options = {
    filter: true,
    dense,
    filterType: 'dropdown',
    responsive: 'standard',
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch checked={dense} onChange={(e) => setDense(e.target.checked)} value="filterArray" color="primary" />
        }
        label="Dense"
      />
      <SimpleTable title="ACME Employee list" data={data} columns={columns} options={options} />
    </>
  );
}
