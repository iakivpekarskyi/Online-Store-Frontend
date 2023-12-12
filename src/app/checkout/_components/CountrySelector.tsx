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

const styleB = {
  'appearance': 'none',
  'webkitAppearance': 'none',
  'width': '100%',
  'fontSize': '1.15rem',
  'padding': '0.675em 6em 0.675em 1em',
  '-webkit-appearance': 'none',
  '-webkit-border-radius': '0.25rem',
  '-webkit-padding-start': '6em',
  'background': '#ec0000',
  'border': '1px solid #0484e5',
  'borderRadius': '0.25rem',
  'color': '#000000',
  'cursor': 'pointer',
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
      className="country"
      options={options}
      value={value}
      onChange={changeHandler}
      placeholder={'Select country'}
      styles={styleB}
    />
  )
}
