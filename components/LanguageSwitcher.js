import { useRouter } from 'next/router';
import Select from 'react-select';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const languageOptions = [
    { value: 'en', label: 'English', flag: '/flags/en.svg' },
    { value: 'ar', label: 'Arabic', flag: '/flags/ar.svg' },
  ];

  const handleChange = (selectedOption) => {
    router.push(router.pathname, router.asPath, { locale: selectedOption.value });
  };

  const customSingleValue = ({ data }) => (
    <div className='flag-img' style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={data.flag}
        alt={`${data.label} flag`}
        style={{ width: '20px', marginRight: '4px' }}
      />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    return (
      <div {...props.innerProps} style={{ display: 'flex',width:'60px', alignItems: 'center', padding: '4px 8px' }}>
        
        {props.data.label}
      </div>
    );
  };

  return (
    <header className="header">
      <div className="top-header d-flex justify-content-between align-items-center">
        <div className="logo">
          <Image
            src="/images/main-logo.svg"
            alt="Main logo"
            width={175}
            height={16}
          />
        </div>
        <div className="lang-sel">
          <Select
            defaultValue={languageOptions.find(option => option.value === activeLocale)}
            options={languageOptions}
            onChange={handleChange}
            className='flag-inn'
            components={{
              SingleValue: customSingleValue,
              Option: customOption,
            }}
            isSearchable={false} // Disable search for a cleaner UI
            styles={{
              control: (provided) => ({
                ...provided,
                background:'transparent',
                border:'0',
                boxShadow:'inherit'
              }),
              singleValue: (provided) => ({
                ...provided,
                display: 'flex',
                alignItems: 'center',
                maxWidth:'60px',
              }),
              menu: (provided) => ({
                ...provided,
                width: 98, 
              }),
              indicatorContainer: (provided) => ({
                ...provided,
                padding: '0px',
              }),
              
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default LanguageSwitcher;
