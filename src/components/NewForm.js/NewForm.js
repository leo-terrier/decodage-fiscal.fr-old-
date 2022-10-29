import {
  Box,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

import { NumberInput, NumberInputField } from '@chakra-ui/react';

import { format, serialize } from '../../util/helper';

import { useEffect, useState } from 'react';

import './newFormStyle.css';
export const NewForm = ({ setResults, colors, setHasMarried }) => {
  const [isMarried, setIsMarried] = useState(false);
  const [nbOfChildren, setNbOfChildren] = useState(0);
  const [socialForm, setSocialForm] = useState('ME');
  const [revenue, setRevenue] = useState(0);
  const [isService, setIsService] = useState('');
  const [expenses, setExpenses] = useState(0);
  const [compensation, setCompensation] = useState(0);
  const [isProfessional, setIsProfessional] = useState('yes');
  const [activityD2, setActivityD2] = useState('employee');
  const [socialFormD2, setSocialFormD2] = useState('ME');
  const [revenueD2, setRevenueD2] = useState(0);
  const [isServiceD2, setIsServiceD2] = useState('');
  const [expensesD2, setExpensesD2] = useState(0);
  const [compensationD2, setCompensationD2] = useState(0);
  const [netIncomeD2, setNetIncomeD2] = useState('');
  const [isProfessionalD2, setIsProfessionalD2] = useState('yes');

  const [isAccordion2Open, setIsAccordion2Open] = useState(false);
  const [isAccordion3Open, setIsAccordion3Open] = useState(false);
  const [isAccordion2D2Open, setIsAccordion2D2Open] = useState(false);

  const getResults = async () => {
    if (revenue) {
      const D2SocialForm =
        activityD2 === 'employee'
          ? 'salariat'
          : activityD2 === 'other'
          ? 'other'
          : socialFormD2;

      const payload = {
        isMarried,
        nbOfChildren,
        socialForm,
        revenue,
        isService,
        expenses,
        compensation,
        isProfessional,
        socialFormD2: D2SocialForm,
        revenueD2,
        isServiceD2,
        expensesD2,
        compensationD2,
        netIncomeD2,
        isProfessionalD2,
      };

      const response = await fetch(
        'http://localhost:8000/results?' + serialize(payload)
      );
      const responseJson = await response.json();

      setResults({ ...responseJson });
      setHasMarried(isMarried);
    }
  };

  /*   let openTabIdx;
   */
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (revenue) {
      getResults();
    }
  }, [
    isMarried,
    nbOfChildren,
    socialForm,
    revenue,
    isService,
    expenses,
    compensation,
    isProfessional,
    socialFormD2,
    revenueD2,
    isServiceD2,
    expensesD2,
    compensationD2,
    netIncomeD2,
    isProfessionalD2,
  ]);

  const style = {
    outterBox: {
      margin: '0 auto',
      width: '80%',
      height: '40%',

      /* display: "flex", */
      /* backgroundColor: '#FFF5F5',
      maxWidth: '700px',
      width: '650px',
      m: 'auto',
      borderRadius: '5px',
      padding: '18px',
      minHeight: '614px', */
    },
    innerFormBox: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'stretch',
      colors: 'black',
    },
    //a vérifier ces propriétés
    panel: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    },
    accordion: {
      width: '100%',
      borderColor: colors.PURPULA,

      /* border: '1px solid black',
      borderLeft: '1px solid black',
      borderRight: '1px solid black',
      borderCollapse: 'collapse', */
    },

    accordionButtonBox: {
      margin: 'auto',
      fontFamily: 'Varela Round',
      fontWeight: 'bold',
      fontSize: '22px',
      /* textStroke: '1px black',
      backgroundOpacity: 0.8, */
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      color: 'white',
    },
    formLabel: {
      padding: 0,
      margin: 0,
      fontSize: '16px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      maxWidth: '180px',
      textAlign: 'center',
    },

    hStack: {
      borderTop: '1px solid',
      backgroundColor: 'white',
      height: '50px',
      justifyContent: 'space-evenly',
      padding: '8px 8px',
      boxSizing: 'content-box',
    },
    numberInputField: {
      borderColor: 'black',
      textAlign: 'right',
    },
    numberInput: {
      width: '130px',
      marginLeft: '50px',
      border: '1px solid black',
    },
    tabPanel: {
      display: 'flex',
      width: '100%',
      padding: 0,
      flexGrow: '2',
      alignItems: 'start',
    },
  };

  return (
    <Box sx={style.outterBox} className="outterFormBox">
      <div style={style.innerFormBox} className="innerFormBox">
        <Accordion
          allowToggle
          sx={{
            width: '33.3%',
            position: 'relative',
          }}
        >
          <AccordionItem
            sx={{
              border: '1px solid',
              borderRadius: !isMarried ? '10px 0 0 0' : '10px 10px 0 0',
              borderRight:
                !isMarried && isAccordion2Open ? 'none' : '1px solid',
              backgroundColor: colors.mBlue,
            }}
          >
            <h3>
              <AccordionButton>
                <Box sx={style.accordionButtonBox}>Informations Foyer</Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel sx={style.panel}>
              <HStack sx={{ ...style.hStack }}>
                <FormLabel sx={style.formLabel}>STATUT MARITAL</FormLabel>
                <div style={{ width: '50%' }}>
                  <Select
                    value={isMarried}
                    onChange={e => {
                      setIsMarried(prev => {
                        if (prev) {
                          setTabIndex(0);
                        }
                        return e.target.value;
                      });
                    }}
                    size="md"
                  >
                    <option value={''}>Célibataire</option>
                    <option value={'yes'}>Marié / Pacsé</option>
                  </Select>
                </div>
              </HStack>
              <HStack
                sx={{
                  ...style.hStack,
                }}
              >
                <FormLabel style={style.formLabel}>NOMBRE D'ENFANTS</FormLabel>
                <NumberInput
                  sx={{
                    ...style.numberInput,
                    width: '70px',
                    marginLeft: '50px',
                  }}
                  variant="flushed"
                  value={nbOfChildren}
                  onChange={value => {
                    setNbOfChildren(value);
                  }}
                  /* value={nbOfChildren} */
                  /* */
                >
                  <NumberInputField
                    allowmousewheel="false"
                    style={style.numberInputField}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Tabs
          /* colorScheme="blue" */
          variant="unstyled"
          align="end"
          onChange={handleTabsChange}
          index={tabIndex}
          color={colors.dGreen}
          sx={{
            borderColor: 'transparent',
            position: 'relative',
            border: 'none',
            width: '66.66%',
            marginLeft: isMarried ? '15px' : '0',
          }}
        >
          <TabList
            mb={5}
            sx={{
              position: 'absolute',
              top: '-60px',
              right: '0',
              borderColor: 'transparent',
              border: 'none',
              display: !isMarried ? 'none' : 'flex',
            }}
          >
            <Tab
              _selected={{
                borderBottom: '2px solid',
                fontWeight: '600',
                borderColor: colors.dBlue,
              }}
              sx={{ fontFamily: 'Montserrat', color: colors.dBlue }}
            >
              Situation du freelance
            </Tab>
            <Tab
              _selected={{ borderBottom: '2px solid', fontWeight: '600' }}
              sx={{ fontFamily: 'Montserrat', color: colors.mBlue }}
            >
              Situation du conjoint
            </Tab>
          </TabList>
          <TabPanels sx={{ position: 'relative' }}>
            <TabPanel sx={{ ...style.tabPanel }}>
              <Accordion
                onChange={() => {
                  setIsAccordion2Open(prev => !prev);
                }}
                allowToggle
                sx={{
                  ...style.accordion,
                }}
              >
                <AccordionItem
                  sx={{
                    backgroundColor: colors.mBlue,
                    border: '1px solid',
                    borderRadius: isMarried ? '10px 0 0 0' : 'none',
                    borderLeft:
                      isAccordion2Open || isMarried ? '1px solid' : 'none',
                    borderRight: isAccordion2Open ? '1px solid' : 'none',
                  }}
                >
                  <h3>
                    <AccordionButton>
                      <Box sx={style.accordionButtonBox}>
                        Informations Activité
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel sx={{ ...style.panel }}>
                    <HStack
                      sx={{
                        ...style.hStack,
                      }}
                    >
                      <FormLabel style={style.formLabel}>
                        FORME JURIDIQUE
                      </FormLabel>
                      <div style={{ width: '75%' }}>
                        <Select
                          value={socialForm}
                          onChange={e => setSocialForm(e.target.value)}
                          size="md"
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

                        display: socialForm !== 'ME' ? 'none' : 'flex',
                      }}
                    >
                      <FormLabel sx={style.formLabel}>
                        TYPE D'ACTIVITE
                      </FormLabel>
                      <div style={{ minWidth: '50%' }}>
                        <Select
                          value={isService}
                          onChange={e => setIsService(e.target.value)}
                          size="md"
                        >
                          <option value={''}>Commerce</option>
                          <option value={'yes'}>Services</option>
                        </Select>
                      </div>
                    </HStack>
                    <HStack
                      style={{
                        ...style.hStack,

                        display:
                          isService && socialForm === 'ME' ? 'flex' : 'none',
                      }}
                    >
                      <FormLabel sx={style.formLabel}>
                        TYPE DE SERVICES
                      </FormLabel>
                      <div style={{ minWidth: '65%' }}>
                        <Select
                          value={isProfessional}
                          onChange={e => setIsProfessional(e.target.value)}
                          size="md"
                        >
                          <option value={'yes'}>Activité libérale</option>
                          <option value={''}>Autre type d'activité</option>
                        </Select>
                      </div>
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion
                onClick={() => {
                  setIsAccordion3Open(prev => !prev);
                }}
                allowToggle
                sx={{
                  ...style.accordion,
                }}
              >
                <AccordionItem
                  sx={{
                    border: '1px solid',
                    borderRadius: '0 10px 0 0',
                    borderLeft: isAccordion2Open ? 'none' : '1px solid',
                    backgroundColor: colors.mBlue,
                  }}
                >
                  <h3>
                    <AccordionButton>
                      <Box sx={style.accordionButtonBox}>
                        Informations Financières
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel sx={style.panel}>
                    <HStack sx={{ ...style.hStack }}>
                      <FormLabel sx={style.formLabel}>
                        CHIFFRE D'AFFAIRES
                      </FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(revenue)}
                        onChange={value => setRevenue(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack sx={{ ...style.hStack }}>
                      <FormLabel sx={style.formLabel}>CHARGES</FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(expenses)}
                        onChange={value => setExpenses(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display: socialForm === 'SAS' ? 'flex' : 'none',
                      }}
                    >
                      <FormLabel style={style.formLabel}>SALAIRE NET</FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(compensation)}
                        onChange={value => setCompensation(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel sx={style.tabPanel}>
              <Accordion
                allowToggle
                onChange={() => {
                  setIsAccordion2D2Open(prev => !prev);
                }}
                sx={{
                  ...style.accordion,
                  backgroundColor: colors.dBrown,
                }}
              >
                <AccordionItem
                  sx={{
                    backgroundColor: colors.blueGray,
                    border: '1px solid',
                    borderRadius: '10px 0 0 0',
                    borderRight: isAccordion2D2Open ? '1px solid' : 'none',
                  }}
                >
                  <h3>
                    <AccordionButton>
                      <Box
                        sx={{
                          ...style.accordionButtonBox,
                          color: colors.xlGray,
                        }}
                      >
                        Informations Activité
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel sx={style.panel}>
                    <HStack sx={style.hStack}>
                      <FormLabel style={style.formLabel}>ACTIVITE</FormLabel>
                      <div style={{ width: '50%' }}>
                        <Select
                          value={activityD2}
                          onChange={e => setActivityD2(e.target.value)}
                          size="md"
                        >
                          <option value="employee">Salariat</option>
                          <option value="freelance">Freelance</option>
                          <option value="other">Chômage</option>
                          <option value="other">Autre</option>
                        </Select>
                      </div>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display: activityD2 !== 'freelance' ? 'none' : 'flex',
                      }}
                    >
                      <FormLabel sx={style.formLabel}>
                        FORME JURIDIQUE
                      </FormLabel>
                      <div style={{ width: '75%' }}>
                        <Select
                          value={socialFormD2}
                          onChange={e => setSocialFormD2(e.target.value)}
                          size="md"
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
                          activityD2 !== 'freelance' || socialFormD2 !== 'ME'
                            ? 'none'
                            : 'flex',
                      }}
                    >
                      <FormLabel sx={style.formLabel}>
                        TYPE D'ACTIVITE
                      </FormLabel>
                      <div style={{ minWidth: '50%' }}>
                        <Select
                          value={format(isServiceD2)}
                          onChange={e => setIsServiceD2(e.target.value)}
                          size="md"
                        >
                          <option value={''}>Commerce</option>
                          <option value={'yes'}>Services</option>
                        </Select>
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
                        TYPE DE SERVICES
                      </FormLabel>
                      <div style={{ minWidth: '65%' }}>
                        <Select
                          value={format(isProfessionalD2)}
                          onChange={e => setIsProfessionalD2(e.target.value)}
                          size="md"
                        >
                          <option value={'yes'}>Activité libérale</option>
                          <option value={''}>Autre type d'activité</option>
                        </Select>
                      </div>
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion
                allowToggle
                sx={{ ...style.accordion, backgroundColor: colors.dBrown }}
              >
                <AccordionItem
                  sx={{
                    border: '1px solid',
                    borderRadius: '0 10px 0 0',
                    borderLeft: isAccordion2D2Open ? 'none' : '1px solid',
                    backgroundColor: colors.blueGray,
                  }}
                >
                  <h3>
                    <AccordionButton>
                      <Box sx={{ ...style.accordionButtonBox, color: 'white' }}>
                        Informations Financières
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel sx={style.panel}>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display: activityD2 !== 'freelance' ? 'none' : 'flex',
                      }}
                    >
                      <FormLabel sx={style.formLabel}>
                        CHIFFRE D'AFFAIRES
                      </FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(revenueD2)}
                        onChange={value => setRevenueD2(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display: activityD2 !== 'freelance' ? 'none' : 'flex',
                      }}
                    >
                      <FormLabel style={style.formLabel}>CHARGES</FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(expensesD2)}
                        onChange={value => setExpensesD2(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display:
                           socialFormD2 === 'SAS'
                            ? 'flex'
                            : 'none',
                      }}
                    >
                      <FormLabel style={style.formLabel}>SALAIRE NET</FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(compensationD2)}
                        onChange={value => setCompensationD2(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display:
                          activityD2 === 'employee' 
                            ? 'flex'
                            : 'none',
                      }}
                    >
                      <FormLabel style={style.formLabel}>SALAIRE BRUT</FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(compensationD2)}
                        onChange={value => setCompensationD2(value)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    <HStack
                      sx={{
                        ...style.hStack,
                        display: activityD2 === 'other' ? 'flex' : 'none',
                      }}
                    >
                      <FormLabel style={style.formLabel}>
                        REVENUS NET IMPOSABLES
                      </FormLabel>
                      <NumberInput
                        sx={style.numberInput}
                        variant="flushed"
                        value={format(netIncomeD2)}
                        onChange={value => setCompensationD2(netIncomeD2)}
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            {/*  <TabPanel>
                <FormControl>
                  <HStack sx={style.formStacks}>
                    <FormLabel style={style.formLabel}>Activité</FormLabel>
                    <Select
                      value={activityD2}
                      onChange={e => handleChange('activityD2', value)}
                      sx={{ borderColor: 'black' }}
                    >
                      <option value="employee">Salariat</option>
                      <option value="freelance">Freelance</option>
                      <option value="otherC">Chômage</option>
                      <option value="other">Autre</option>
                    </Select>
                  </HStack>
                  <Divider />
                  {activityD2 === 'employee' ? (
                    <div>
                      <HStack sx={style.formStacks}>
                        <FormLabel style={style.formLabel}>
                          Salaire Annuel (brut)
                        </FormLabel>
                        <NumberInput
                          style={style.numberInput}
                          variant="flushed"
                          value={format(compensationD2)}
                          onChange={value =>
                            handleChange('compensationD2', parse(value))
                          }
                        >
                          <NumberInputField
                            allowMouseWheel="false"
                            style={style.numberInputField}
                          />
                        </NumberInput>
                      </HStack>
                      <Divider />
                    </div>
                  ) : activityD2 === 'otherC' ||
                    activityD2 === 'other' ? (
                    <div>
                      <HStack sx={style.formStacks}>
                        <FormLabel style={style.formLabel}>
                          Revenus nets imposables perçus pendant l'année
                        </FormLabel>
                        <NumberInput
                          style={style.numberInput}
                          variant="flushed"
                          value={format(netIncomeD2)}
                          onChange={value =>
                            handleChange('netIncomeD2', parse(value))
                          }
                        >
                          <NumberInputField
                            allowMouseWheel="false"
                            style={style.numberInputField}
                          />
                        </NumberInput>
                      </HStack>
                      <Divider />
                    </div>
                  ) : (
                    ''
                  )}
                  <div
                    style={{
                      display: activityD2 !== 'freelance' && 'none',
                      flexDirection: 'column',
                    }}
                  >
                    <HStack sx={style.formStacks}>
                      <FormLabel sx={style.formLabel}>
                        Forme juridique :{' '}
                      </FormLabel>
                      {SocialFormBoxD2()}
                    </HStack>
                    <Divider />
                    <HStack sx={style.formStackCA}>
                      <FormLabel sx={style.formLabel}>
                        Chiffre d'affaires :
                      </FormLabel>
                      <Box sx={style.radioBox}>
                        <RadioGroup
                          onChange={value =>
                            handleChange('isRevenueInDaysD2', value)
                          }
                          value={isRevenueInDaysD2}
                        >
                          <Stack direction="row">
                            <Radio value="" defaultChecked>
                              En montant annuel
                            </Radio>
                            <Radio value="yes">
                              En jours travaillés annuellement et TJM
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </Box>
                    </HStack>
                    <HStack sx={{ ...style.formStacks, marginTop: '0' }}>
                      <div style={{ width: '100%' }}>
                        {!isRevenueInDaysD2 ? (
                          <div style={style.innerDivCA}>
                            <label
                              htmlFor="revenue"
                              style={{
                                marginRight: '15px',
                                fontStyle: 'italic',
                                fontSize: '16px',
                              }}
                            >
                              Chiffre d'affaires annuel (HT)
                            </label>
                            <NumberInput
                              sx={style.numberInputNoMargin}
                              variant="flushed"
                              id="revenue"
                              value={format(revenueD2)}
                              onChange={value =>
                                handleChange('revenueD2', parse(value))
                              }
                            >
                              <NumberInputField
                                allowMouseWheel="false"
                                style={style.numberInputField}
                              />
                            </NumberInput>
                          </div>
                        ) : (
                          <div style={style.innerDivCA}>
                            <label
                              htmlFor="nbOfDays"
                              style={{ fontStyle: 'italic', fontSize: '16px' }}
                            >
                              Travailler
                            </label>
                            <NumberInput
                              sx={style.sentenceInput}
                              variant="flushed"
                              id="nbOfDays"
                              size="sm"
                              value={format(nbOfDaysD2)}
                              onChange={value => {
                                handleChange('nbOfDaysD2', parse(value));
                                TJMD2 &&
                                  handleChange(
                                    'revenue',
                                    TJMD2 * value
                                  );
                              }}
                            >
                              <NumberInputField
                                allowMouseWheel="false"
                                style={style.numberInputField}
                              />
                            </NumberInput>
                            <label
                              htmlFor="nbOfDays"
                              style={{ fontStyle: 'italic', fontSize: '16px' }}
                            >
                              jour par an au TJM (Tarif Journalier Moyen) de
                            </label>
                            <NumberInput
                              sx={style.sentenceInput}
                              variant="flushed"
                              id="TJM"
                              size="sm"
                              value={format(TJMD2)}
                              onChange={value => {
                                handleChange('TJMD2', parse(value));
                                nbOfDaysD2 &&
                                  handleChange(
                                    'revenue',
                                    nbOfDaysD2 * value
                                  );
                              }}
                            >
                              <NumberInputField
                                allowMouseWheel="false"
                                style={style.numberInputField}
                              />
                            </NumberInput>
                          </div>
                        )}
                      </div>
                    </HStack>
                    <Divider />
                    <HStack sx={style.formStacks}>
                      <FormLabel style={style.formLabel}>
                        Total des charges à caractère professionnel:
                      </FormLabel>
                      <NumberInput
                        style={style.numberInput}
                        variant="flushed"
                        value={format(expensesD2)}
                        onChange={value =>
                          handleChange('expensesD2', parse(value))
                        }
                      >
                        <NumberInputField
                          allowMouseWheel="false"
                          style={style.numberInputField}
                        />
                      </NumberInput>
                    </HStack>
                    {optionalFieldsD2()}
                  </div>
                </FormControl>
              </TabPanel> */}
          </TabPanels>
        </Tabs>
        {/* </div> */}
      </div>
    </Box>
  );
};

//https://stackoverflow.com/questions/24516958/styling-radio-buttons-into-a-square

{
  /*   <FormControl><Box style={style.innerBox}>
                <h1 style={style.formHeading}>
                  Situation fiscale du freelance
                </h1>
                <HStack sx={style.formStacks}>
                  <FormLabel style={style.formLabel}>
                    Statut marital :
                  </FormLabel>
                  {MaritalBox()}
                </HStack>
                <Divider />
                <HStack sx={style.formStacks}>
                  <FormLabel style={style.formLabel}>
                    Nombre d'enfants à charge :
                  </FormLabel>

                  <NumberInput
                    sx={{
                      ...style.numberInput,
                      width: '70px',
                      marginLeft: '50px',
                    }}
                    variant="flushed"
                    value={nbOfChildren}
                    onChange={value =>
                      handleChange('nbOfChildren', parseInt(value, 10))
                    }
                  >
                    <NumberInputField
                      allowMouseWheel="false"
                      style={style.numberInputField}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
                <Divider />
                <HStack sx={style.formStacks}>
                  <FormLabel style={style.formLabel}>
                    Forme juridique :{' '}
                  </FormLabel>
                  {SocialFormBox()}
                </HStack>
                <Divider />
                <HStack sx={style.formStackCA}>
                  <FormLabel sx={style.formLabel}>
                    Chiffre d'affaires :
                  </FormLabel>
                  <Box sx={style.radioBox}>
                    <RadioGroup
                      onChange={value => handleChange('isRevenueInDays', value)}
                      value={isRevenueInDays}
                    >
                      <Stack direction="row">
                        <Radio value="" defaultChecked>
                          En montant annuel
                        </Radio>
                        <Radio value="yes">
                          En jours travaillés annuellement et TJM
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                </HStack>
                <HStack sx={{ ...style.formStacks, marginTop: '0' }}>
                  <div style={{ width: '100%' }}>
                    {!isRevenueInDays ? (
                      <div style={style.innerDivCA}>
                        <label
                          htmlFor="revenue"
                          style={{
                            marginRight: '15px',
                            fontStyle: 'italic',
                            fontSize: '16px',
                          }}
                        >
                          Chiffre d'affaires annuel (HT) :
                        </label>
                        <NumberInput
                          sx={style.numberInputNoMargin}
                          variant="flushed"
                          id="revenue"
                          value={format(revenue)}
                          onChange={value =>
                            handleChange('revenue', parse(value))
                          }
                        >
                          <NumberInputField
                            allowMouseWheel="false"
                            sx={style.numberInputField}
                          />
                        </NumberInput>
                      </div>
                    ) : (
                      <div style={style.innerDivCA}>
                        <label
                          htmlFor="nbOfDays"
                          style={{ fontStyle: 'italic', fontSize: '16px' }}
                        >
                          Travailler
                        </label>
                        <NumberInput
                          sx={style.sentenceInput}
                          variant="flushed"
                          id="nbOfDays"
                          size="sm"
                          value={format(nbOfDays)}
                          onChange={value => {
                            handleChange('nbOfDays', parse(value));
                            TJM &&
                              handleChange('revenue', TJM * value);
                          }}
                        >
                          <NumberInputField
                            allowMouseWheel="false"
                            sx={style.numberInputField}
                          />
                        </NumberInput>
                        <label
                          htmlFor="nbOfDays"
                          style={{ fontStyle: 'italic', fontSize: '16px' }}
                        >
                          jour par an au TJM (Tarif Journalier Moyen) de
                        </label>
                        <NumberInput
                          sx={style.sentenceInput}
                          variant="flushed"
                          id="TJM"
                          size="sm"
                          value={format(TJM)}
                          onChange={value => {
                            handleChange('TJM', parse(value));
                            nbOfDays &&
                              handleChange(
                                'revenue',
                                nbOfDays * value
                              );
                          }}
                        >
                          <NumberInputField
                            allowMouseWheel="false"
                            style={style.numberInputField}
                          />
                        </NumberInput>
                      </div>
                    )}
                  </div>
                </HStack>
                <Divider />
                <HStack sx={style.formStacks}>
                  <FormLabel style={style.formLabel}>
                    Total des charges à caractère professionnel :
                  </FormLabel>
                  <NumberInput
                    style={style.numberInput}
                    variant="flushed"
                    value={format(expenses)}
                    onChange={value => handleChange('expenses', parse(value))}
                  >
                    <NumberInputField
                      allowMouseWheel="false"
                      style={style.numberInputField}
                    />
                  </NumberInput>
                </HStack>
                {optionalFields()}
              </Box>
            </FormControl> */
}
