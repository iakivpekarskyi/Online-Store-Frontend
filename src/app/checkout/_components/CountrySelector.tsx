import React, { useMemo, useState } from 'react'
import Select, { ValueType } from 'react-select'

import countryList from 'react-select-country-list'

interface CountrySelectorProps {
  onChange: (country: CountryData | null) => void
}

interface CountryData {
  label: string
  value: string
}

export default function CountrySelector({ onChange }: CountrySelectorProps) {
  const [value, setValue] = useState<ValueType<CountryData>>(null)
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (selectedOption: ValueType<CountryData>) => {
    setValue(selectedOption as CountryData)
    onChange(selectedOption as CountryData)
  }

  return (
    <Select
      className="my-4 rounded-md border bg-gray-100 p-2"
      options={options}
      value={value}
      onChange={changeHandler}
      placeholder={'Select country'}
    />
  )
}
