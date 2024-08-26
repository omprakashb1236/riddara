import { useRouter } from 'next/router';
import Select from 'react-select';
import Image from 'next/image'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
})

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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={data.flag}
        alt={`${data.label} flag`}
        style={{ width: '20px', marginRight: '8px' }}
      />
      {data.label}
    </div>
  );

  return (
    <>
    <div className='top-header d-flex justify-content-between'>
      <div className='logo'>
      <Image
              src='images/main-logo.svg'
              alt="banner image"
              width={175}
              height={16}
            />
      </div>
      <div className='lang-sel'>
    <Select
    className={montserrat.className}
      defaultValue={languageOptions.find(option => option.value === activeLocale)}
      options={languageOptions}
      onChange={handleChange}
      components={{ SingleValue: customSingleValue }}
    />
    </div>
    </div>
    </>
  );
};

export default LanguageSwitcher;
