// import React, { useMemo } from 'react'
// import { ValueType } from 'react-select'
// import countryList from 'react-select-country-list'

// interface Props {
//   onChange: (country: CountryData) => void
// }

// interface CountryData {
//   label: string
//   value: string
// }

// const CountrySelector = ({ onChange }: Props) => {
//   const options = useMemo(() => countryList().getData(), [])

//   return (
//     <Select
//       options={options}
//       onChange={(setValue) => onChange(setValue)}
//       placeholder="Select country"
//       className="select-country"
//     />
//   )
// }

// export default CountrySelector
