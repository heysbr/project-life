import Button from '@/components/common/Button';
import FormField from '@/components/common/FormField';
import React from 'react'

const FORM_FIELDS = [
  {
    name: "institute-name",
    type: "text",
    placeholder: "Enter name",
    label: "Institute Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email ID",
    label: "Email Id",
  },
  {
    name: "mobile",
    type: "mobile",
    placeholder: "Mobile",
    label: "Enter Mobile",
  },
    {
    name: "pincode",
    type: "text",
    placeholder: "Enter Pincode",
    label: "Pincode",
  },
  {
    name: "address",
    type: "text",
    placeholder: "Enter Address",
    label: "Address",
  },
  {
    name: "city",
    type: "text",
    placeholder: "City",
    label: "Enter City",
  },
  {
    name: "state",
    type: "text",
    placeholder: "State",
    label: "Enter State",
  },
  
];

export default function AddInstitute() {
  return (
    <div className='flex  h-screen md:h-fit bg-[#FC5285]'>
      <div className='bg-[#FFFFFF] md:m-30 w-full flex items-center  flex-col rounded-md relative h-screen md:h-fit pb-10'> 
        <svg className='absolute top-2 left-2 md:right-2' width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.14732 22.9461C7.51362 22.3124 7.51362 21.2852 8.14732 20.6515L21.1501 7.64869C21.7838 7.01499 22.8111 7.01498 23.4448 7.64869C24.0785 8.28239 24.0785 9.30963 23.4448 9.94334L10.442 22.9461C9.80826 23.5799 8.78103 23.5799 8.14732 22.9461Z" fill="#FC5285"/>
<path d="M21.1501 22.946L8.14732 9.94322C7.51362 9.30952 7.51362 8.28228 8.14732 7.64857C8.78103 7.01487 9.80827 7.01487 10.442 7.64857L23.4448 20.6514C24.0785 21.2851 24.0785 22.3123 23.4448 22.946C22.8111 23.5797 21.7838 23.5797 21.1501 22.946Z" fill="#FC5285"/>
</svg>

      <h1 className='font-bold text-2xl mt-5'>Add Institute</h1>
      <svg className='mt-8' width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="44" cy="43.5" r="43.5" fill="#EDEFF1"/>
<g clipPath="url(#clip0_1_6306)">
<path d="M43.6942 42.1134C46.5345 42.1134 48.9937 41.0672 51.0036 39.0029C53.0128 36.939 54.0319 34.4137 54.0319 31.4963C54.0319 28.5799 53.0132 26.0542 51.0033 23.9897C48.9933 21.9261 46.5342 20.8799 43.6942 20.8799C40.8535 20.8799 38.3946 21.9261 36.3851 23.99C34.3755 26.0539 33.3564 28.5795 33.3564 31.4963C33.3564 34.4137 34.3755 36.9394 36.3851 39.0033C38.3953 41.0668 40.8545 42.1134 43.6942 42.1134Z" fill="white"/>
<path d="M61.7821 54.7753C61.7242 53.9164 61.6069 52.9795 61.4344 51.9901C61.2602 50.9933 61.0359 50.0509 60.7674 49.1897C60.4897 48.2995 60.1128 47.4204 59.6462 46.5779C59.1625 45.7035 58.594 44.9422 57.9562 44.3156C57.2891 43.6602 56.4725 43.1332 55.5281 42.7488C54.587 42.3664 53.5441 42.1727 52.4284 42.1727C51.9903 42.1727 51.5666 42.3573 50.7483 42.9045C50.2446 43.2418 49.6555 43.6319 48.998 44.0634C48.4358 44.4313 47.6741 44.776 46.7333 45.0881C45.8155 45.3931 44.8836 45.5478 43.9634 45.5478C43.0439 45.5478 42.112 45.3931 41.1935 45.0881C40.2537 44.7764 39.4917 44.4316 38.9305 44.0637C38.2792 43.6363 37.6897 43.2462 37.1786 42.9042C36.3609 42.357 35.9372 42.1724 35.4991 42.1724C34.3831 42.1724 33.3405 42.3664 32.3997 42.7491C31.456 43.1328 30.639 43.6598 29.9713 44.316C29.3334 44.9428 28.765 45.7039 28.2817 46.5779C27.8157 47.4204 27.4385 48.2991 27.1608 49.19C26.8926 50.0513 26.6683 50.9933 26.4941 51.9901C26.3212 52.9781 26.2043 53.9154 26.1463 54.7763C26.0894 55.6181 26.0605 56.4942 26.0605 57.3793C26.0605 59.6803 26.7728 61.5431 28.1772 62.9169C29.5643 64.2725 31.3994 64.9599 33.6316 64.9599H54.2979C56.5294 64.9599 58.3645 64.2725 59.7519 62.9169C61.1567 61.5441 61.8689 59.6806 61.8689 57.379C61.8686 56.4908 61.8394 55.6147 61.7821 54.7753Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_6306">
<rect width="42.92" height="44.08" fill="white" transform="translate(22.54 20.8799)"/>
</clipPath>
</defs>
</svg>

<button className='rounded-2xl bg-[#FC5285] px-3 py-0.5 mt-4 text-white text-xs'> Add Photo</button>


    <div className="flex flex-col md:grid md:grid-cols-3 gap-x-10 m-4  gap-y-5 justify-center">
            {FORM_FIELDS.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
              />
            ))}
          </div>

          <Button label={"Add Institute"} width={"w-68"} />

      </div>
    </div>
  )
}
