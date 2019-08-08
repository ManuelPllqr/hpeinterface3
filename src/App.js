import React, {Component} from 'react';
import { Box, Select, Button, CheckBox, Collapsible, Heading, Grommet, Layer, ResponsiveContext, Image, Text, DataTable, Meter, FormField, Anchor, RangeInput, Chart} from 'grommet';
import { FormClose, Notification, Facebook, } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';


const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='start'
        background='white'
        style={{ zIndex: '1' }}
        {...props}
    />

);

function Example() {
  const [checked, setChecked] = React.useState(true);
  return (
      <CheckBox
          checked={checked}
          label="interested?"
          onChange={(event) => setChecked(event.target.checked)}
      />
  );
}


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


class App extends React.Component {
  constructor(){
    super();
    this.state = {size:'small'};
  }
  render(){
    const {s} = this.state;
    const {value} = this.state;

    return (

        <Grommet theme={hpe} full>
          <ResponsiveContext.Consumer>
            {size => (
                <Box fill>

                  <AppBar flex margin={{top: '5%'}} gap='30%' style={{height:'3%'}}>
                    <Image
                        style={{width: 100, height: 100}}
                        src='https://www.hpe.com/etc/designs/hpeweb/logo.jpg'
                    />
                    <Heading level='3' color='#00b388' alignSelf='center' textAlign='center' >Predictive Maintenance -
                      Prescriptive</Heading>
                    <Image
                        style={{width: 50, height: 50}}
                        src='https://media.licdn.com/dms/image/C4D0BAQEZ2_r-IM1lRw/company-logo_200_200/0?e=2159024400&v=beta&t=cbDc9rSI649EBVMWOgbddgWmR4yItafGXzOL_t2TmdM'
                    />
                  </AppBar>
<Box>
                    <Text flex margin={{left:'1%',top: '3%'}}>Prescriptive View</Text>
</Box>


                  <DataTable style={{height:'40%'}} margin={{horizontal:'1%',top: '3%'}}
                             columns={[
                               {

                                 property: 'Installation',
                                 header: <Heading size="10px">Installation</Heading>,
                                 primary: true,
                                 search: true,
                                 resizeable: true,

                               },
                               {
                                 property: 'Locality',
                                 header: <Heading size="10px">Equipment</Heading>,
                                 resizeable: true,
                                 search: true,
                                 type: 'text'
                               },
                               {
                                 property: 'Equipment',
                                 header: <Heading size="10px">Equipment</Heading>,
                                 resizeable: true,
                                 search: true,
                               },
                               {
                                 property: 'FailurePredicted',
                                 header: <Heading size="10px">Failure Predicted</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'FailureProbability',
                                 header: <Heading size="10px">Failure Probability</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'ValidFrom',
                                 header: <Heading size="10px">Valid From</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'ValidTo',
                                 header: <Heading size="10px">Valid To</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'RUL',
                                 header: <Heading size="10px">RUL (days)</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'Criticality',
                                 header: <Heading size="10px">Criticality</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'FailureCost',
                                 header: <Heading size="10px">Failure Cost</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'ShutdownCost',
                                 header: <Heading size="10px">Shutdown Cost</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'MaintenanceCost',
                                 header: <Heading size="10px">Maintenance Cost</Heading>,
                                 resizeable: true,
                               },
                               {
                                 property: 'MaintenanceGain',
                                 header: <Heading size="10px">Maintenance Gain</Heading>,
                                 resizeable: true,
                               },

                             ]}
                             data={[
                               {Installation: 1, Locality: 'Madrid', Equipment: 11, FailurePredicted: 'True', FailureProbability: '94.47%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 15, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 170, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 99, FailurePredicted: 'False', FailureProbability: '26.23%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 21, Criticality:'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 170, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 79, FailurePredicted: 'False', FailureProbability: '82.85%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 28, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 170, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 72, FailurePredicted: 'False', FailureProbability: '2.71%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 23, Criticality: 'Low', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 100, MaintenanceGain: 3900},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 48, FailurePredicted: 'False', FailureProbability: '2.42%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 25, Criticality: 'Low', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 100, MaintenanceGain: 3900},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 67, FailurePredicted: 'False', FailureProbability: '0.79%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 27, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 120, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 47, FailurePredicted: 'False', FailureProbability: '0.60%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 28, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 120, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 71, FailurePredicted: 'False', FailureProbability: '0.60%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 34, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 120, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Barcelona', Equipment: 87, FailurePredicted: 'False', FailureProbability: '0.60%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 23, Criticality: 'Medium', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 120, MaintenanceGain: 3880},
                               {Installation: 1, Locality: 'Santender', Equipment: 93, FailurePredicted: 'False', FailureProbability: '0.60%', ValidFrom: 22/11/2017, ValidTo: '29/11/2017', RUL: 60, Criticality: 'High', FailureCost: 5000, ShutdownCost: 1000, MaintenanceCost: 300, MaintenanceGain: 3700},

                             ]}
                             sortable={true}
                             resizeable={true}
                  />

                  <Box flex border={{ side:'top', color: '#00b388', size: 'xsmall' }} style={{ height: '65%'}}>
                    <br></br>
                    <Box margin={{horizontal:'42%'}}  style={{width: '20%', height: '20%'}}>
                      <Heading size="10px">Key variable of failure prediction</Heading>

                      <Select
                          style={{width: '20%', height: '20%'}}
                          options={['Option1', 'Option2', 'Option3', 'Option4', 'Option5']}
                          value={s}
                          onChange={({ option }) => this.setState({ s: option })}
                      /></Box>

                    <br></br>
                    <br></br>

                    <Box margin={{horizontal:'32%'}} direction='row' gap='88%'>
                      <Heading size="10px">Re-score Prediction</Heading>
                      <Heading size="10px">Re-score Probability</Heading>
                    </Box>

                    <br></br>
                    <br></br>

                    <Box margin={{horizontal:'32%'}} direction='row' gap='82%'>
                      <Text size="10px">Unavailable</Text>
                      <Text size="10px" margin={{horizontal:'17px'}}>Unavailable</Text>
                    </Box>

                    <Box>
                      <br></br>
                      <br></br>
                      <Box  border={{ color: '#00b388', size: 'xsmall' }} style={{width: '80%', height: '60%'}} margin={{horizontal:'10%'}} direction='row'  >

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Box  margin={{horizontal:'40px',top:'40px'}} direction='column'  style={{width: '80%', height: '60%'}} >
                          <Heading size="14px">Set to baseline</Heading><br></br>
                          <CheckBox toggle={true}/>
                          <br></br>
                          <br></br>
                          <CheckBox toggle={true}/>
                          <br></br><br></br>
                          <CheckBox toggle={true}/>
                          <br></br><br></br>
                          <CheckBox toggle={true}/>
                          <br></br><br></br>
                          <CheckBox toggle={true}/>
                        </Box>

                        <Box margin={{horizontal:'40px',top:'40px'}} direction='column'  style={{width: '80%', height: '60%'}} >
                          <Heading size="14px">Variable Name</Heading><br></br>
                          <Text size="12px" margin={{horizontal:'0px'}}>vibration_range_7d</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>days_since_last_maintenance</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'8px'}}>vibration_avg_1d</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'10px'}}>pressure_stddev_7d</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'8px'}}>count_of_past_erros</Text>
                        </Box>

                        <Box margin={{horizontal:'10%',top:'40px'}} direction='column'  style={{width: '80%', height: '60%'}} >
                          <Heading size="14px">Variable Weight</Heading>
                          <Text size="12px" margin={{top:'21px'}}>-0.200000000000</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>-0.200000000000</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'8px'}}>-0.200000000000</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'10px'}}>-0.200000000000</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'10px'}}>-0.200000000000</Text>
                        </Box>

                        <Box margin={{horizontal:'40px',top:'40px'}} direction='column'  style={{width: '80%', height: '60%'}} >
                          <Heading size="14px">Variable Value</Heading>
                          <Text size="12px" margin={{top:'21px'}}>41.7651426121</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>15</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>59.8917990952</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'1px'}}>10.4780862796</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'12px'}}>3</Text>
                          <br></br><br></br>
                        </Box>

                        <Box margin={{horizontal:'40px',top:'40px'}} direction='column' style={{width: '88%', height: '60%'}} >
                          <Heading size="14px">Variable Baseline</Heading>
                          <Text size="12px" margin={{top:'21px'}}>28.3119487292</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>9.12244957959</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'17px'}}>42.6202082983</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'1px'}}>10.4977347731</Text>
                          <br></br><br></br>
                          <Text size="12px" margin={{top:'12px'}}>3.09782608606</Text>

                        </Box>
                      </Box>
                          <Box direction='row'  style={{width: '88%', height: '60%'}} margin={{horizontal:'2%',top:'4%'}}>
                              <Button
                                  active={true}
                                  margin={{horizontal:'28%',top:'45%'}}
                                  style={{width: 100, height: 30, backgroundColor: '#00b388' }}
                                  color='#00b388'
                                  onClick={() => alert('Clicked')}
                                  label={ <Text color='white' size='12px'>'Rescoring'</Text>
                                  }
                              />

                              <Button
                                  active={true}
                                  margin={{horizontal:'10%',top:'45%'}}
                                  style={{width: 100, height: 30, backgroundColor: '#00b388'}}
                                  color='#00b388'
                                  onClick={() => alert('Clicked')}
                                  label={ <Text color='white' size='12px'>'Analytics'</Text>
                                  }
                              />
                          </Box>



                    </Box>

                    <br></br>


                  </Box>
                  <br></br>
                </Box>
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
    );
  }
}

export default App;

