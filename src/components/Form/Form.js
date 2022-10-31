import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery
} from '@chakra-ui/react';

import { queryTypes, useQueryState } from 'next-usequerystate';
import { useEffect, useState } from 'react';
import { serialize } from '../../util/helper';
import { CustomPopover } from '../Popover/CustomPopover';

let limit = 0;
let limit2 = 0;
let expenseAboveD1 = false;
let expenseAboveD2 = false;

export const Form = ({ setResults, colors, setLoadingDoubleSASComp }) => {
  const [isMarried, setIsMarried] = useQueryState(
    'isMarried',
    queryTypes.boolean.withDefault(false)
  );
  const [nbOfChildren, setNbOfChildren] = useQueryState(
    'nbOfChildren',
    queryTypes.integer.withDefault(0)
  );
  const [socialForm, setSocialForm] = useQueryState(
    'socialForm',
    queryTypes.string.withDefault('ME')
  );
  const [revenue, setRevenue] = useQueryState(
    'revenue',
    queryTypes.integer.withDefault(0)
  );
  const [isService, setIsService] = useQueryState(
    'isService',
    queryTypes.boolean.withDefault(false)
  );
  const [expenses, setExpenses] = useQueryState(
    'expenses',
    queryTypes.integer.withDefault(0)
  );
  const [compensation, setCompensation] = useQueryState(
    'compensation',
    queryTypes.integer.withDefault(0)
  );
  const [isProfessional, setIsProfessional] = useQueryState(
    'isProfessional',
    queryTypes.boolean.withDefault(true)
  );
  const [activityD2, setActivityD2] = useQueryState(
    'activityD2',
    queryTypes.string.withDefault('employee')
  );
  const [socialFormD2, setSocialFormD2] = useQueryState(
    'socialFormD2',
    queryTypes.string.withDefault('ME')
  );
  const [revenueD2, setRevenueD2] = useQueryState(
    'revenueD2',
    queryTypes.integer.withDefault(0)
  );
  const [isServiceD2, setIsServiceD2] = useQueryState(
    'isServiceD2',
    queryTypes.boolean.withDefault(false)
  );
  const [expensesD2, setExpensesD2] = useQueryState(
    'expensesD2',
    queryTypes.integer.withDefault(0)
  );
  const [compensationD2, setCompensationD2] = useQueryState(
    'compensationD2',
    queryTypes.integer.withDefault(0)
  );
  const [salaryD2, setSalaryD2] = useQueryState(
    'salaryD2',
    queryTypes.integer.withDefault(0)
  );
  const [netIncomeD2, setNetIncomeD2] = useQueryState(
    'netIncomeD2',
    queryTypes.integer.withDefault(0)
  );
  const [isProfessionalD2, setIsProfessionalD2] = useQueryState(
    'isProfessionalD2',
    queryTypes.boolean.withDefault(true)
  );

  const [autoModified, setAutoModified] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isMeD1AboveLimit, setIsMeD1AboveLimit] = useState(false);
  const [isMeD2AboveLimit, setIsMeD2AboveLimit] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState(false);
  const [isAccordion3Open, setIsAccordion3Open] = useState(false);
  const [isAccordion2D2Open, setIsAccordion2D2Open] = useState(false);
  const [isAccordion3D2Open, setIsAccordion3D2Open] = useState(false);

  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan1215] = useMediaQuery('(min-width: 1215px)');

  let SASRevAlreadyAdjusted = false;

  const showValueInt = value => {
    if (!revenue && !value) {
      return '';
    }
    return value.toLocaleString();
  };

  const maxRevenue = (whichD, value) => {
    let max = 10000000;
    let result;
    if (whichD === 2) {
      if (!isMarried || activityD2 !== 'freelance') return 0;
      if (socialForm === 'SAS' && socialFormD2 === 'SAS' && revenue > 200000) {
        SASRevAlreadyAdjusted = true;
        max = 200000;
      }
      result = Math.max(0, Math.min(max, value));
    } else {
      if (
        socialForm === 'SAS' &&
        socialFormD2 === 'SAS' &&
        revenueD2 > 200000 &&
        !SASRevAlreadyAdjusted
      ) {
        max = 200000;
      }
      result = Math.max(0, Math.min(max, value));
    }
    return result;
  };

  const maxExpense = whichD => {
    let result;
    if (whichD === 1) {
      expenseAboveD1 = expenses > revenue;
      if (socialForm === 'ME') {
        if (isService) {
          result = Math.min(expenses, revenue * (1 - 0.22));
        } else {
          result = Math.min(expenses, revenue * (1 - 0.129));
        }
      } else if (socialForm === 'SARL') {
        if (revenue < 1146) {
          result = 0;
        } else {
          result = Math.min(revenue - 1145, expenses);
        }
      } else {
        result = Math.min(expenses, revenue);
      }
    } else {
      expenseAboveD2 = expensesD2 > revenueD2;
      if (!isMarried || activityD2 !== 'freelance') return 0;
      if (socialFormD2 === 'ME') {
        if (isServiceD2) {
          result = Math.min(expensesD2, revenueD2 * (1 - 0.22));
        } else {
          result = Math.min(expensesD2, revenueD2 * (1 - 0.129));
        }
      } else if (socialFormD2 === 'SARL') {
        if (revenueD2 < 1146) {
          result = 0;
        } else {
          result = Math.min(revenueD2 - 1145, expensesD2);
        }
      } else {
        result = Math.min(expensesD2, revenueD2);
      }
    }
    result = Math.max(result, 0);
    return result;
  };

  const maxComp = whichD => {
    let result;
    if (whichD === 1) {
      if (socialForm !== 'SAS') return 0;
      if (compensation > (revenue - expenses) / 1.6) {
        result = (revenue - expenses) / 1.6;
      }
      if (compensation > 200000 && compensationD2 > 200000) {
        result = 200000;
      } else result = compensation;
    } else {
      if (!isMarried || socialFormD2 !== 'SAS' || activityD2 !== 'freelance')
        return 0;
      if (
        socialFormD2 === 'SAS' &&
        compensationD2 > (revenueD2 - expensesD2) / 1.6
      ) {
        result = (revenueD2 - expensesD2) / 1.6;
      } else result = compensationD2;
    }
    result = Math.max(0, result);
    return result;
  };

  const getResults = async abortObj => {
    if (revenue) {
      if (autoModified) {
        setAutoModified(false);
        return;
      }
      limit = isService ? 72600 : 176200;
      limit2 = isServiceD2 ? 72600 : 176200;

      if (socialForm === 'ME' && revenue > limit) {
        setIsMeD1AboveLimit(true);
      } else {
        setIsMeD1AboveLimit(false);
      }
      if (socialFormD2 === 'ME' && revenueD2 > limit) {
        setIsMeD2AboveLimit(true);
      } else {
        setIsMeD2AboveLimit(false);
      }

      if (
        compensationD2 &&
        compensation &&
        compensation + compensationD2 > 80000
      ) {
        setLoadingDoubleSASComp(true);
      }
      if (activityD2 !== 'freelance') {
        setSocialFormD2('ME', { scroll: false, shallow: true });
      }

      const payload = {
        isMarried,
        nbOfChildren: nbOfChildren < 0 ? 0 : nbOfChildren,
        socialForm,
        revenue: maxRevenue(1, revenue),
        isService,
        expenses: maxExpense(1),
        compensation: maxComp(1),
        isProfessional,
        socialFormD2:
          activityD2 === 'employee'
            ? 'salariat'
            : activityD2 === 'other' || activityD2 === 'other2'
            ? 'other'
            : socialFormD2,
        revenueD2: maxRevenue(2, revenueD2),
        isServiceD2,
        expensesD2: maxExpense(2),
        compensationD2: maxComp(2),
        salaryD2:
          !isMarried || activityD2 !== 'employee'
            ? 0
            : salaryD2 > 10000000
            ? 10000000
            : salaryD2,
        netIncomeD2:
          !isMarried || !activityD2.includes('other')
            ? 0
            : netIncomeD2 > 10000000
            ? 10000000
            : netIncomeD2,
        isProfessionalD2,
      };

      if (process.env.NODE_ENV !== 'production') {
        Object.keys(payload).forEach(elt => {
          if (
            typeof payload[elt] !== 'number' &&
            typeof payload[elt] !== 'string' &&
            typeof payload[elt] !== 'boolean'
          ) {
            throw new Error(
              'type problem : ' +
                elt +
                ` - ${payload[elt]} is of type ` +
                typeof payload[elt]
            );
          }
        });
      }

      const url =
        process.env.NODE_ENV === 'production'
          ? 'https://ceb5nuqtol.execute-api.eu-west-3.amazonaws.com/?'
          : '/api/results?';
      let response;
      try {
        response = await fetch(url + serialize(payload), abortObj);
      } catch (e) {
        console.log('Request aborted');
        return;
      }

      const responseJson = await response.json();

      const numberValueArray = [
        'revenuImposable',
        'revenuNet',
        'CA',
        'charges',
        'cotisations',
        'IS',
        'IR',
        'flatTax',
        'remuneration',
        'salaire',
        'dividende',
        'charges',
        'children',
      ];

      Object.keys(responseJson).forEach(elt => {
        numberValueArray.forEach(elet => {
          if (elt.includes(elet)) {
            responseJson[elt] = Math.round(Number(responseJson[elt]));
          }
        });
        if (responseJson[elt] === 'false') {
          responseJson[elt] = false;
        }
      });

      if (
        socialForm === 'SAS' &&
        Math.abs(responseJson.remuneration - responseJson.IR - compensation) >
          10
      ) {
        setCompensation(responseJson.remuneration - responseJson.IR, {
          scroll: false,
          shallow: true,
        });
      }
      if (
        isMarried &&
        socialFormD2 === 'SAS' &&
        Math.abs(
          responseJson.remunerationD2 - responseJson.IRD2 - compensationD2
        ) > 10
      ) {
        setCompensationD2(responseJson.remunerationD2 - responseJson.IRD2, {
          scroll: false,
          shallow: true,
        });
      }

      const validator = (str, state, setter) => {
        if (payload[str] !== state) {
          setAutoModified(true);
          setter(payload[str], { scroll: false, shallow: true });
        }
      };

      validator('nbOfChildren', nbOfChildren, setNbOfChildren);
      validator('revenue', revenue, setRevenue);
      validator('revenueD2', revenueD2, setRevenueD2);
      validator('salaryD2', salaryD2, setSalaryD2);
      validator('netIncomeD2', netIncomeD2, setNetIncomeD2);
      validator('expenses', expenses, setExpenses);
      validator('expensesD2', expensesD2, setExpensesD2);
      setLoadingDoubleSASComp(false);
      setResults({ ...responseJson });
    }

    if (socialForm !== 'SAS' && compensation) {
      setCompensation(0, { scroll: false, shallow: true });
    }
    if (
      (socialFormD2 !== 'SAS' || !isMarried || activityD2 !== 'freelance') &&
      compensationD2
    ) {
      setCompensationD2(0, { scroll: false, shallow: true });
    }
    if (
      (socialForm === 'SAS' && expenseAboveD1) ||
      (socialFormD2 === 'SAS' && expenseAboveD2)
    ) {
      setAutoModified(false);
    }
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };

    setHydrated(true);

    if (revenue) {
      setTimeout(() => {
        getResults(opts);
      }, 500);
    }

    return () => abortCtrl.abort();
  }, [
    isMarried,
    nbOfChildren,
    socialForm,
    revenue,
    isService,
    expenses,
    compensation,
    isProfessional,
    activityD2,
    socialFormD2,
    revenueD2,
    isServiceD2,
    expensesD2,
    compensationD2,
    salaryD2,
    netIncomeD2,
    isProfessionalD2,
  ]);

  const style = {
    formContainer: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 auto',
    },
    titleDiv: {
      alignSelf: 'center',
      marginBottom: !isLargerThan1215
        ? 0
        : isLargerThan1215 && isMarried
        ? '95px'
        : '70px',
      borderBottom: 'none',
    },
    title: {
      fontSize: isLargerThan800 ? '30px' : '26px',
      fontWeight: 600,
      color: colors.dBlue,
      textDecoration: 'underline 2px',
      textUnderlineOffset: '5px',
      fontFamily: 'Poppins',
      marginBottom: '-7px',
      textAlign: 'center',
    },
    foyerSection: {
      display: !isLargerThan1215 ? 'flex' : 'none',
      flexDirection: isLargerThan800 ? 'row' : 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin:
        isMarried && isLargerThan800
          ? '62px auto 95px auto'
          : !isMarried && isLargerThan800
          ? '62px auto 52px auto'
          : isMarried && !isLargerThan800
          ? '62px auto 115px auto'
          : '62px auto 45px auto',
      backgroundColor: 'rgba(251, 218, 204, .5)',
      borderRadius: '10px',
      color: colors.dBlue,
      position: 'relative',
      fontFamily: 'Nunito Sans',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
      width: isLargerThan800 ? '96%' : isLargerThan500 ? '360px' : '330px',
      height: isLargerThan800 ? '90px' : isLargerThan500 ? '170px' : '145px',
      maxWidth: isLargerThan800 ? '700px' : 'none',
      textAlign: 'center',
    },
    foyerSectionTitle: {
      fontWeight: '600',
      fontStyle: 'italic',
      fontSize: '1.35rem',
      position: 'absolute',
      top: -15,
      left: 0,
      right: 0,
      width: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
    HStackFoyer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    outterFormBox: {
      position: 'relative',
      minHeight: '69px',
    },
    innerFormBox: {
      width: '100%',
      display: 'flex',
      position: isLargerThan800 ? 'absolute' : 'initial',
      flexDirection: isLargerThan800 ? 'row' : 'column',
      maxWidth: isLargerThan800 ? 'initial' : '430px',
      margin: '0 auto',
    },
    accordion: {
      width: '100%',
    },
    accordionButtonBox: {
      margin: 'auto',
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      fontSize: '22px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
    },
    tab: {
      fontFamily: 'Nunito Sans',
      color: colors.dBlue,
      fontSize: '21px',
      paddingBottom: 1,
    },
    panel: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    },
    formLabelOutterDiv: {
      display: 'flex',
      alignItems: 'end',
    },
    inputOutterDiv: {
      display: 'flex',
      alignItems: 'end',
    },
    formLabel: {
      padding: 0,
      margin: 0,
      fontSize: '16px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    hStack: {
      borderTop: '1px solid',
      backgroundColor: 'white',
      height: '50px',
      justifyContent: 'space-evenly',
      padding: '8px 13px',
      boxSizing: 'content-box',
      boxShadow: 'none',
    },
    numberInputField: {
      border: '1px solid black',
      borderRadius: '3px',
      textAlign: 'right',
      paddingRight: '15px',
      boxShadow: 'none',
    },
    numberInput: {
      width: '130px',
    },
    select: {
      border: '1px solid black',
    },
    tabPanel: {
      display: 'flex',
      flexDirection: isLargerThan800 ? 'row' : 'column',
      padding: 0,
    },
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 6px',
  };

  if (hydrated) {
    return (
      <Box as="form" sx={style.formContainer} className="formContainer">
        <div style={style.titleDiv}>
          <h1 style={style.title} className="bold">
            Simulateur fiscal pour freelance
          </h1>
        </div>

        <div style={style.foyerSection}>
          <h2 style={style.foyerSectionTitle}>Informations foyer</h2>
          <HStack sx={style.HStackFoyer}>
            <FormLabel sx={{ ...style.formLabel, fontSize: '1rem' }}>
              Statut marital :
            </FormLabel>
            <div style={{ minWidth: '180px', maxWidth: '180px' }}>
              <Select
                value={isMarried}
                sx={{ ...style.select }}
                bg={'white'}
                onChange={e => {
                  setIsMarried(
                    prev => {
                      if (prev) {
                        setTabIndex(0);
                      }
                      return e.target.value === 'true' ? true : false;
                    },
                    { scroll: false, shallow: true }
                  );
                }}
                size="md"
              >
                <option value={false}>Célibataire</option>
                <option value={true}>Marié / Pacsé</option>
              </Select>
            </div>
          </HStack>
          <HStack sx={style.HStackFoyer}>
            <FormLabel sx={{ ...style.formLabel, fontSize: '1rem' }}>
              Nombre d'enfants :{' '}
            </FormLabel>
            <NumberInput
              keepWithinRange={true}
              bg={'white'}
              sx={{
                ...style.numberInput,
                width: '70px',
                marginLeft: '50px',
              }}
              variant="flushed"
              value={nbOfChildren}
              onChange={value =>
                setNbOfChildren(value, { scroll: false, shallow: true })
              }
              focusBorderColor="black"
              min={0}
            >
              <NumberInputField
                sx={{
                  ...style.numberInputField,
                  paddingRight: '34px',
                }}
                focusBorderColor="black"
                _focus={{ borderColor: 'initial', boxShadow: 'initial' }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <CustomPopover
              isLargerThan1000={isLargerThan1000}
              label="nbOfChildren"
            />
          </HStack>
        </div>
        <div style={style.outterFormBox}>
          <div style={style.innerFormBox} className="innerFormBox">
            <Accordion
              onChange={() => {
                setIsAccordion1Open(prev => !prev);
              }}
              allowToggle
              sx={{
                width: '33.3%',
                position: 'relative',
                display: !isLargerThan1215 ? 'none' : 'initial',
              }}
            >
              <AccordionItem
                sx={{
                  border: '1px solid',
                  borderRight:
                    isMarried ||
                    !(
                      (isAccordion2Open &&
                        socialForm === 'ME' &&
                        isAccordion1Open) ||
                      !isAccordion1Open
                    )
                      ? '1px solid'
                      : 'none',
                  backgroundColor: colors.mBlue,
                  boxShadow: style.boxShadow,
                }}
              >
                <h2>
                  <AccordionButton>
                    <Box sx={{ ...style.accordionButtonBox, color: 'white' }}>
                      Informations Foyer
                    </Box>
                    <AccordionIcon color="white" sx={{ fontSize: '35px' }} />
                  </AccordionButton>
                </h2>
                <AccordionPanel sx={style.panel}>
                  <HStack sx={style.hStack}>
                    <FormLabel sx={style.formLabel}>STATUT MARITAL</FormLabel>
                    <div style={{ minWidth: '180px', maxWidth: '180px' }}>
                      <Select
                        value={isMarried}
                        onChange={e => {
                          setIsMarried(
                            prev => {
                              if (prev) {
                                setTabIndex(0);
                              }
                              return e.target.value === 'true' ? true : false;
                            },
                            { scroll: false, shallow: true }
                          );
                        }}
                        sx={style.select}
                        size="md"
                      >
                        <option value={false}>Célibataire</option>
                        <option value={true}>Marié / Pacsé</option>
                      </Select>
                    </div>
                  </HStack>
                  <HStack sx={{ ...style.hStack }}>
                    <FormLabel sx={{ ...style.formLabel }}>
                      NOMBRE D'ENFANTS
                    </FormLabel>
                    <HStack sx={{ width: '100px', justifyContent: 'start' }}>
                      <NumberInput
                        keepWithinRange={true}
                        bg="white"
                        sx={{
                          ...style.numberInput,
                          width: '100px',
                        }}
                        variant="flushed"
                        value={nbOfChildren}
                        onChange={value =>
                          setNbOfChildren(value, {
                            scroll: false,
                            shallow: true,
                          })
                        }
                        focusBorderColor="black"
                        min={0}
                      >
                        <NumberInputField
                          sx={{
                            ...style.numberInputField,
                            paddingRight: '34px',
                            boxShadow: 'none',
                            width: '70px',
                          }}
                          focusBorderColor="black"
                          _focus={{
                            borderColor: 'initial',
                            boxShadow: 'initial',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <CustomPopover
                        isLargerThan1000={isLargerThan1000}
                        label="nbOfChildren"
                      />
                    </HStack>
                  </HStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Tabs
              variant="unstyled"
              align="end"
              onChange={setTabIndex}
              index={tabIndex}
              sx={{
                position: 'relative',
                border: 'none',
                width: isLargerThan1215 ? '66.66%' : '100%',
                marginLeft: isLargerThan1215 && isMarried ? '15px' : '0',
              }}
            >
              <TabList
                sx={{
                  position: 'absolute',
                  top: isLargerThan800 ? '-62px' : '-90px',
                  right: '0',
                  display: !isMarried ? 'none' : 'flex',
                }}
              >
                <Tab
                  _selected={{
                    borderBottom: '2px solid',
                    fontWeight: 700,
                    borderColor: colors.dBlue,
                  }}
                  sx={style.tab}
                >
                  Situation du freelance
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: '2px solid',
                    fontWeight: 700,
                    borderColor: colors.dGray,
                  }}
                  sx={style.tab}
                >
                  Situation du conjoint
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel sx={style.tabPanel}>
                  <Accordion
                    index={[isAccordion2Open ? 0 : null]}
                    onChange={() => setIsAccordion2Open(prev => !prev)}
                    allowToggle
                    sx={{
                      width: '100%',
                    }}
                  >
                    <AccordionItem
                      sx={{
                        backgroundColor: colors.mBlue,
                        border: '1px solid',
                        borderLeft: !isLargerThan800
                          ? '1px solid'
                          : isMarried ||
                            !isAccordion1Open ||
                            (isAccordion1Open &&
                              isAccordion2Open &&
                              socialForm === 'ME')
                          ? '1px solid'
                          : 'none',
                        borderRight: !isLargerThan800
                          ? '1px solid'
                          : !isAccordion3Open ||
                            (isAccordion3Open &&
                              isAccordion2Open &&
                              socialForm === 'ME')
                          ? '1px solid'
                          : 'none',
                        boxShadow: isLargerThan800 ? style.boxShadow : 'none',
                      }}
                    >
                      <h2>
                        <AccordionButton>
                          <Box sx={style.accordionButtonBox}>
                            Informations Activité
                          </Box>
                          <AccordionIcon
                            color="white"
                            sx={{ fontSize: '35px' }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel sx={style.panel}>
                        <HStack sx={style.hStack}>
                          <FormLabel style={style.formLabel}>
                            FORME JURIDIQUE
                          </FormLabel>
                          <div style={{ minWidth: '200px', maxWidth: '200px' }}>
                            <Select
                              value={socialForm}
                              onChange={e =>
                                setSocialForm(e.target.value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                              sx={{ border: '1px solid black' }}
                              size="md"
                            >
                              <option value="ME">Micro-Entreprise</option>
                              <option value="SARL">SARL / EURL</option>
                              <option value="SAS">SAS / SASU</option>
                            </Select>
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display: socialForm !== 'ME' ? 'none' : 'flex',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            TYPE D'ACTIVITE
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <div
                              style={{ minWidth: '175px', maxWidth: '175px' }}
                            >
                              <Select
                                value={isService}
                                onChange={e =>
                                  setIsService(
                                    e.target.value === 'true' ? true : false,
                                    { scroll: false, shallow: true }
                                  )
                                }
                                size="md"
                                sx={{ ...style.select }}
                              >
                                <option value={false}>Achat-revente</option>
                                <option value={true}>Autre</option>
                              </Select>
                            </div>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="isService"
                            />
                          </div>
                        </HStack>
                        <HStack
                          style={{
                            ...style.hStack,
                            display:
                              isService && socialForm === 'ME'
                                ? 'flex'
                                : 'none',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            ACTIVITE LIBERALE
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <div
                              style={{ minWidth: '110px', maxWidth: '110px' }}
                            >
                              <Select
                                value={isProfessional}
                                onChange={e =>
                                  setIsProfessional(
                                    e.target.value === 'true' ? true : false,
                                    { scroll: false, shallow: true }
                                  )
                                }
                                size="md"
                                sx={style.select}
                              >
                                <option value={true}>Oui</option>
                                <option value={false}>Non</option>
                              </Select>
                            </div>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="isProfessional"
                            />
                          </div>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Accordion
                    allowToggle
                    index={[isAccordion3Open ? 0 : null]}
                    onChange={() => {
                      setIsAccordion3Open(prev => !prev);
                    }}
                    sx={{
                      width: '100%',
                    }}
                  >
                    <AccordionItem
                      sx={{
                        border: '1px solid',
                        borderLeft: !isLargerThan800
                          ? '1px solid'
                          : (isAccordion2Open &&
                              socialForm === 'ME' &&
                              isAccordion3Open) ||
                            !isAccordion3Open
                          ? 'none'
                          : '1px solid',
                        borderTop: !isLargerThan800 ? 'none' : '1px solid',
                        backgroundColor: colors.mBlue,
                        boxShadow: isLargerThan800 ? style.boxShadow : 'none',
                      }}
                    >
                      <h2>
                        <AccordionButton>
                          <Box sx={style.accordionButtonBox}>
                            Informations Financières
                          </Box>
                          <AccordionIcon
                            color="white"
                            sx={{ fontSize: '35px' }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel sx={{ ...style.panel }}>
                        <HStack sx={{ ...style.hStack }}>
                          <FormLabel sx={style.formLabel}>
                            CHIFFRE D'AFFAIRES
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(revenue)}
                              onChange={value => {
                                setRevenue(value, {
                                  scroll: false,
                                  shallow: true,
                                });
                              }}
                            >
                              <NumberInputField
                                style={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="revenue"
                              isMeAboveLimit={isMeD1AboveLimit}
                              limit={limit}
                            />
                          </div>
                        </HStack>
                        <HStack sx={style.hStack}>
                          <FormLabel sx={style.formLabel}> CHARGES</FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(expenses)}
                              onChange={value => {
                                setExpenses(value, {
                                  scroll: false,
                                  shallow: true,
                                });
                              }}
                            >
                              <NumberInputField
                                sx={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="expenses"
                            />
                          </div>
                        </HStack>
                        <HStack
                          display={socialForm !== 'SAS' ? 'none' : 'flex'}
                          sx={{
                            ...style.hStack,
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            SALAIRE NET
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(compensation)}
                              onChange={value =>
                                setCompensation(value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                            >
                              <NumberInputField
                                style={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="compensation"
                            />
                          </div>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel sx={style.tabPanel}>
                  <Accordion
                    allowToggle
                    index={[isAccordion2D2Open ? 0 : null]}
                    onChange={() => {
                      setIsAccordion2D2Open(prev => !prev);
                    }}
                    sx={style.accordion}
                  >
                    <AccordionItem
                      sx={{
                        backgroundColor: colors.dGray,
                        border: '1px solid',
                        borderRight: !isLargerThan800
                          ? '1px solid'
                          : !isAccordion3D2Open ||
                            (isAccordion3D2Open &&
                              isAccordion2D2Open &&
                              socialFormD2 === 'ME')
                          ? '1px solid'
                          : 'none',
                        boxShadow: isLargerThan800 ? style.boxShadow : 'none',
                      }}
                    >
                      <h2>
                        <AccordionButton>
                          <Box
                            sx={{
                              ...style.accordionButtonBox,
                              color: 'white',
                            }}
                          >
                            Informations Activité
                          </Box>
                          <AccordionIcon
                            color="white"
                            sx={{ fontSize: '35px' }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel sx={style.panel}>
                        <HStack sx={style.hStack}>
                          <FormLabel sx={style.formLabel}>ACTIVITE</FormLabel>
                          <div style={{ maxWidth: '185px', minWidth: '185px' }}>
                            <Select
                              value={activityD2}
                              onChange={e => {
                                setActivityD2(e.target.value, {
                                  scroll: false,
                                  shallow: true,
                                });
                              }}
                              sx={style.select}
                              size="md"
                            >
                              <option value="employee">Salariat</option>
                              <option value="freelance">Freelance</option>
                              <option value="other">Chômage</option>
                              <option value="other2">Autre</option>
                            </Select>
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 !== 'freelance' ? 'none' : 'flex',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            FORME JURIDIQUE
                          </FormLabel>
                          <div style={{ minWidth: '200px', maxWidth: '200px' }}>
                            <Select
                              value={socialFormD2}
                              onChange={e => {
                                setSocialFormD2(e.target.value, {
                                  scroll: false,
                                  shallow: true,
                                });
                              }}
                              size="md"
                              sx={{ border: '1px solid black' }}
                            >
                              <option value={'ME'}>Micro-Entreprise</option>
                              <option value={'SARL'}>SARL / EURL</option>
                              <option value={'SAS'}>SAS / SASU</option>
                            </Select>
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 !== 'freelance' ||
                              socialFormD2 !== 'ME'
                                ? 'none'
                                : 'flex',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            TYPE D'ACTIVITE
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <div
                              style={{ minWidth: '175px', maxWidth: '175px' }}
                            >
                              <Select
                                value={isServiceD2}
                                onChange={e =>
                                  setIsServiceD2(
                                    e.target.value === 'true' ? true : false,
                                    { scroll: false, shallow: true }
                                  )
                                }
                                size="md"
                                sx={style.select}
                              >
                                <option value={false}>Achat-revente</option>
                                <option value={true}>Autre</option>
                              </Select>
                            </div>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="isService"
                            />
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 !== 'freelance' ||
                              socialFormD2 !== 'ME' ||
                              !isServiceD2
                                ? 'none'
                                : 'flex',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            ACTIVITE LIBERALE
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <div
                              style={{ minWidth: '110px', maxWidth: '110px' }}
                            >
                              <Select
                                value={isProfessionalD2}
                                onChange={e =>
                                  setIsProfessionalD2(
                                    e.target.value === 'true' ? true : false,
                                    { scroll: false, shallow: true }
                                  )
                                }
                                size="md"
                                sx={style.select}
                              >
                                <option value={true}>Oui</option>
                                <option value={false}>Non</option>
                              </Select>
                            </div>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="isProfessional"
                            />
                          </div>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Accordion
                    allowToggle
                    index={[isAccordion3D2Open ? 0 : null]}
                    sx={{ width: '100%' }}
                    onChange={() => {
                      setIsAccordion3D2Open(prev => !prev);
                    }}
                  >
                    <AccordionItem
                      sx={{
                        border: '1px solid',
                        borderLeft: !isLargerThan800
                          ? '1px solid'
                          : (isAccordion2D2Open &&
                              socialFormD2 === 'ME' &&
                              isAccordion3D2Open) ||
                            !isAccordion3D2Open
                          ? 'none'
                          : '1px solid',
                        borderTop: !isLargerThan800 ? 'none' : '1px solid',
                        backgroundColor: colors.dGray,
                        boxShadow: isLargerThan800 ? style.boxShadow : 'none',
                      }}
                    >
                      <h2>
                        <AccordionButton>
                          <Box
                            sx={{ ...style.accordionButtonBox, color: 'white' }}
                          >
                            Informations Financières
                          </Box>
                          <AccordionIcon
                            color="white"
                            sx={{ fontSize: '35px' }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel sx={style.panel}>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 !== 'freelance' ? 'none' : 'flex',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            CHIFFRE D'AFFAIRES
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(revenueD2)}
                              onChange={value => {
                                setRevenueD2(maxRevenue(2, value), {
                                  scroll: false,
                                  shallow: true,
                                });
                              }}
                            >
                              <NumberInputField
                                style={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="revenue"
                              isMeAboveLimit={isMeD2AboveLimit}
                              limit={limit2}
                            />
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 !== 'freelance' ? 'none' : 'flex',
                          }}
                        >
                          <FormLabel style={style.formLabel}>CHARGES</FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(expensesD2)}
                              onChange={value =>
                                setExpensesD2(value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                            >
                              <NumberInputField
                                style={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="expenses"
                            />
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              socialFormD2 === 'SAS' &&
                              activityD2 === 'freelance'
                                ? 'flex'
                                : 'none',
                          }}
                        >
                          <FormLabel style={style.formLabel}>
                            SALAIRE NET
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(compensationD2)}
                              onChange={value =>
                                setCompensationD2(value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                            >
                              <NumberInputField
                                sx={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="compensation"
                            />
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display:
                              activityD2 === 'employee' ? 'flex' : 'none',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            SALAIRE BRUT
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(salaryD2)}
                              onChange={value =>
                                setSalaryD2(value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                            >
                              <NumberInputField
                                style={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="salary"
                            />
                          </div>
                        </HStack>
                        <HStack
                          sx={{
                            ...style.hStack,
                            display: activityD2.includes('other')
                              ? 'flex'
                              : 'none',
                          }}
                        >
                          <FormLabel sx={style.formLabel}>
                            REVENUS NET IMPOSABLES
                          </FormLabel>
                          <div style={style.inputOutterDiv}>
                            <NumberInput
                              sx={style.numberInput}
                              variant="flushed"
                              value={showValueInt(netIncomeD2)}
                              onChange={value =>
                                setNetIncomeD2(value, {
                                  scroll: false,
                                  shallow: true,
                                })
                              }
                            >
                              <NumberInputField
                                sx={style.numberInputField}
                                focusBorderColor="black"
                                _focus={{
                                  borderColor: 'initial',
                                  boxShadow: 'initial',
                                }}
                              />
                            </NumberInput>
                            <CustomPopover
                              isLargerThan1000={isLargerThan1000}
                              label="netIncome"
                            />
                          </div>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </Box>
    );
  }
};
