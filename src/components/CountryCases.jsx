import React from 'react';
import { Accordion, Button, Card } from "react-bootstrap";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import FA from 'react-fontawesome';
import NumberFormat from 'react-number-format';
import '../App.css';

class CountryCases extends React.Component {
    state = { 
        id: 0,
        cases: [],
        icon: ''
    };

    componentDidMount() {
        const cases = this.props.case;
        const id = this.props.id;
        this.setState({
            cases,
            id
        });
        this.countryToFlag(cases.country_name);
    }

    checkIfNoZeroValue = (value) => {
        return (!value) ? 0 : value;
    }

    countryToFlag = (isoCode) => {
        
        const countries = [
            { code: 'AD', label: 'andorra', phone: '376' },
            { code: 'AE', label: 'uae', phone: '971' },
            { code: 'AF', label: 'afghanistan', phone: '93' },
            { code: 'AG', label: 'antigua and barbuda', phone: '1-268' },
            { code: 'AI', label: 'anguilla', phone: '1-264' },
            { code: 'AL', label: 'albania', phone: '355' },
            { code: 'AM', label: 'armenia', phone: '374' },
            { code: 'AO', label: 'angola', phone: '244' },
            { code: 'AQ', label: 'antarctica', phone: '672' },
            { code: 'AR', label: 'argentina', phone: '54' },
            { code: 'AT', label: 'austria', phone: '43' },
            { code: 'AU', label: 'australia', phone: '61', suggested: true },
            { code: 'AW', label: 'aruba', phone: '297' },
            { code: 'AZ', label: 'azerbaijan', phone: '994' },
            { code: 'BA', label: 'bosnia and herzegovina', phone: '387' },
            { code: 'BB', label: 'barbados', phone: '1-246' },
            { code: 'BD', label: 'bangladesh', phone: '880' },
            { code: 'BE', label: 'belgium', phone: '32' },
            { code: 'BF', label: 'burkina faso', phone: '226' },
            { code: 'BG', label: 'bulgaria', phone: '359' },
            { code: 'BH', label: 'bahrain', phone: '973' },
            { code: 'BI', label: 'burundi', phone: '257' },
            { code: 'BJ', label: 'benin', phone: '229' },
            { code: 'BL', label: 'st. barth', phone: '590' },
            { code: 'BM', label: 'bermuda', phone: '1-441' },
            { code: 'BN', label: 'brunei', phone: '673' },
            { code: 'BO', label: 'bolivia', phone: '591' },
            { code: 'BR', label: 'brazil', phone: '55' },
            { code: 'BS', label: 'bahamas', phone: '1-242' },
            { code: 'BT', label: 'bhutan', phone: '975' },
            { code: 'BW', label: 'botswana', phone: '267' },
            { code: 'BY', label: 'belarus', phone: '375' },
            { code: 'BZ', label: 'belize', phone: '501' },
            { code: 'NL', label: 'caribbean netherlands', phone: '31' },
            { code: 'CA', label: 'canada', phone: '1', suggested: true },
            { code: 'CG', label: 'congo', phone: '242' },
            { code: 'CD', label: 'drc', phone: '243' },
            { code: 'CF', label: 'car', phone: '236' },
            { code: 'CH', label: 'switzerland', phone: '41' },
            { code: 'CI', label: "ivory coast", phone: '225' },
            { code: 'CL', label: 'chile', phone: '56' },
            { code: 'CM', label: 'cameroon', phone: '237' },
            { code: 'CN', label: 'china', phone: '86' },
            { code: 'CO', label: 'colombia', phone: '57' },
            { code: 'CR', label: 'costa rica', phone: '506' },
            { code: 'CU', label: 'cuba', phone: '53' },
            { code: 'CV', label: 'cabo verde', phone: '238' },
            { code: 'CW', label: 'curaçao', phone: '599' },
            { code: 'CY', label: 'cyprus', phone: '357' },
            { code: 'CZ', label: 'czechia', phone: '420' },
            { code: 'DE', label: 'germany', phone: '49', suggested: true },
            { code: 'DJ', label: 'djibouti', phone: '253' },
            { code: 'DK', label: 'denmark', phone: '45' },
            { code: 'DM', label: 'dominica', phone: '1-767' },
            { code: 'DO', label: 'dominican republic', phone: '1-809' },
            { code: 'DZ', label: 'algeria', phone: '213' },
            { code: 'EC', label: 'ecuador', phone: '593' },
            { code: 'EE', label: 'estonia', phone: '372' },
            { code: 'EG', label: 'egypt', phone: '20' },
            { code: 'EH', label: 'western sahara', phone: '212' },
            { code: 'ER', label: 'eritrea', phone: '291' },
            { code: 'ES', label: 'spain', phone: '34' },
            { code: 'ET', label: 'ethiopia', phone: '251' },
            { code: 'FI', label: 'finland', phone: '358' },
            { code: 'FJ', label: 'fiji', phone: '679' },
            { code: 'FK', label: 'falkland islands', phone: '500' },
            { code: 'FR', label: 'france', phone: '33', suggested: true },
            { code: 'GA', label: 'gabon', phone: '241' },
            { code: 'GB', label: 'uk', phone: '44' },
            { code: 'GD', label: 'grenada', phone: '1-473' },
            { code: 'GE', label: 'georgia', phone: '995' },
            { code: 'GF', label: 'french guiana', phone: '594' },
            { code: 'GG', label: 'guernsey', phone: '44' },
            { code: 'GH', label: 'ghana', phone: '233' },
            { code: 'GI', label: 'gibraltar', phone: '350' },
            { code: 'GL', label: 'greenland', phone: '299' },
            { code: 'GM', label: 'gambia', phone: '220' },
            { code: 'GN', label: 'guinea', phone: '224' },
            { code: 'GP', label: 'guadeloupe', phone: '590' },
            { code: 'GQ', label: 'equatorial guinea', phone: '240' },
            { code: 'GR', label: 'greece', phone: '30' },
            { code: 'GS', label: 'south georgia and the south sandwich islands', phone: '500' },
            { code: 'GT', label: 'guatemala', phone: '502' },
            { code: 'GU', label: 'guam', phone: '1-671' },
            { code: 'GW', label: 'guinea-bissau', phone: '245' },
            { code: 'GY', label: 'guyana', phone: '592' },
            { code: 'HK', label: 'hong kong', phone: '852' },
            { code: 'HN', label: 'honduras', phone: '504' },
            { code: 'HR', label: 'croatia', phone: '385' },
            { code: 'HT', label: 'haiti', phone: '509' },
            { code: 'HU', label: 'hungary', phone: '36' },
            { code: 'ID', label: 'indonesia', phone: '62' },
            { code: 'IE', label: 'ireland', phone: '353' },
            { code: 'IL', label: 'israel', phone: '972' },
            { code: 'IM', label: 'isle of man', phone: '44' },
            { code: 'IN', label: 'india', phone: '91' },
            { code: 'IO', label: 'british indian ocean territory', phone: '246' },
            { code: 'IQ', label: 'iraq', phone: '964' },
            { code: 'IR', label: 'iran', phone: '98' },
            { code: 'IS', label: 'iceland', phone: '354' },
            { code: 'IT', label: 'italy', phone: '39' },
            { code: 'JE', label: 'jersey', phone: '44' },
            { code: 'JM', label: 'jamaica', phone: '1-876' },
            { code: 'JO', label: 'jordan', phone: '962' },
            { code: 'JP', label: 'japan', phone: '81', suggested: true },
            { code: 'KE', label: 'kenya', phone: '254' },
            { code: 'KG', label: 'kyrgyzstan', phone: '996' },
            { code: 'KH', label: 'cambodia', phone: '855' },
            { code: 'KI', label: 'kiribati', phone: '686' },
            { code: 'KM', label: 'comoros', phone: '269' },
            { code: 'KN', label: 'saint kitts and nevis', phone: '1-869' },
            { code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
            { code: 'KR', label: 's. korea', phone: '82' },
            { code: 'KW', label: 'kuwait', phone: '965' },
            { code: 'KY', label: 'cayman islands', phone: '1-345' },
            { code: 'KZ', label: 'kazakhstan', phone: '7' },
            { code: 'LA', label: "laos", phone: '856' },
            { code: 'LB', label: 'lebanon', phone: '961' },
            { code: 'LC', label: 'saint lucia', phone: '1-758' },
            { code: 'LI', label: 'liechtenstein', phone: '423' },
            { code: 'LK', label: 'sri lanka', phone: '94' },
            { code: 'LR', label: 'liberia', phone: '231' },
            { code: 'LS', label: 'lesotho', phone: '266' },
            { code: 'LT', label: 'lithuania', phone: '370' },
            { code: 'LU', label: 'luxembourg', phone: '352' },
            { code: 'LV', label: 'latvia', phone: '371' },
            { code: 'LY', label: 'libya', phone: '218' },
            { code: 'MA', label: 'morocco', phone: '212' },
            { code: 'MC', label: 'monaco', phone: '377' },
            { code: 'MD', label: 'moldova', phone: '373' },
            { code: 'ME', label: 'montenegro', phone: '382' },
            { code: 'MF', label: 'saint martin', phone: '590' },
            { code: 'MG', label: 'madagascar', phone: '261' },
            { code: 'MH', label: 'marshall islands', phone: '692' },
            { code: 'MK', label: 'north macedonia', phone: '389' },
            { code: 'ML', label: 'mali', phone: '223' },
            { code: 'MM', label: 'myanmar', phone: '95' },
            { code: 'MN', label: 'mongolia', phone: '976' },
            { code: 'MO', label: 'macao', phone: '853' },
            { code: 'MP', label: 'northern mariana islands', phone: '1-670' },
            { code: 'MQ', label: 'martinique', phone: '596' },
            { code: 'MR', label: 'mauritania', phone: '222' },
            { code: 'MS', label: 'montserrat', phone: '1-664' },
            { code: 'MT', label: 'malta', phone: '356' },
            { code: 'MU', label: 'mauritius', phone: '230' },
            { code: 'MV', label: 'maldives', phone: '960' },
            { code: 'MW', label: 'malawi', phone: '265' },
            { code: 'MX', label: 'mexico', phone: '52' },
            { code: 'MY', label: 'malaysia', phone: '60' },
            { code: 'MZ', label: 'mozambique', phone: '258' },
            { code: 'NA', label: 'namibia', phone: '264' },
            { code: 'NC', label: 'new caledonia', phone: '687' },
            { code: 'NE', label: 'niger', phone: '227' },
            { code: 'NF', label: 'norfolk island', phone: '672' },
            { code: 'NG', label: 'nigeria', phone: '234' },
            { code: 'NI', label: 'nicaragua', phone: '505' },
            { code: 'NL', label: 'netherlands', phone: '31' },
            { code: 'NO', label: 'norway', phone: '47' },
            { code: 'NP', label: 'nepal', phone: '977' },
            { code: 'NR', label: 'nauru', phone: '674' },
            { code: 'NU', label: 'niue', phone: '683' },
            { code: 'NZ', label: 'new zealand', phone: '64' },
            { code: 'OM', label: 'oman', phone: '968' },
            { code: 'PA', label: 'panama', phone: '507' },
            { code: 'PE', label: 'peru', phone: '51' },
            { code: 'PF', label: 'french polynesia', phone: '689' },
            { code: 'PG', label: 'papua new guinea', phone: '675' },
            { code: 'PH', label: 'philippines', phone: '63' },
            { code: 'PK', label: 'pakistan', phone: '92' },
            { code: 'PL', label: 'poland', phone: '48' },
            { code: 'PM', label: 'saint pierre and miquelon', phone: '508' },
            { code: 'PN', label: 'pitcairn', phone: '870' },
            { code: 'PR', label: 'puerto rico', phone: '1' },
            { code: 'PS', label: 'palestine', phone: '970' },
            { code: 'PT', label: 'portugal', phone: '351' },
            { code: 'PW', label: 'palau', phone: '680' },
            { code: 'PY', label: 'paraguay', phone: '595' },
            { code: 'QA', label: 'qatar', phone: '974' },
            { code: 'RE', label: 'réunion', phone: '262' },
            { code: 'RO', label: 'romania', phone: '40' },
            { code: 'RS', label: 'serbia', phone: '381' },
            { code: 'RU', label: 'russia', phone: '7' },
            { code: 'RW', label: 'rwanda', phone: '250' },
            { code: 'SA', label: 'saudi arabia', phone: '966' },
            { code: 'SB', label: 'solomon islands', phone: '677' },
            { code: 'SC', label: 'seychelles', phone: '248' },
            { code: 'SD', label: 'sudan', phone: '249' },
            { code: 'SE', label: 'sweden', phone: '46' },
            { code: 'SG', label: 'singapore', phone: '65' },
            { code: 'SH', label: 'saint helena', phone: '290' },
            { code: 'SI', label: 'slovenia', phone: '386' },
            { code: 'SJ', label: 'svalbard and jan mayen', phone: '47' },
            { code: 'SK', label: 'slovakia', phone: '421' },
            { code: 'SL', label: 'sierra leone', phone: '232' },
            { code: 'SM', label: 'san marino', phone: '378' },
            { code: 'SN', label: 'senegal', phone: '221' },
            { code: 'SO', label: 'somalia', phone: '252' },
            { code: 'SR', label: 'suriname', phone: '597' },
            { code: 'SS', label: 'south sudan', phone: '211' },
            { code: 'ST', label: 'sao tome and principe', phone: '239' },
            { code: 'SV', label: 'el salvador', phone: '503' },
            { code: 'SX', label: 'sint maarten', phone: '1-721' },
            { code: 'SY', label: 'syria', phone: '963' },
            { code: 'SZ', label: 'swaziland', phone: '268' },
            { code: 'TC', label: 'turks and caicos', phone: '1-649' },
            { code: 'TD', label: 'chad', phone: '235' },
            { code: 'TG', label: 'togo', phone: '228' },
            { code: 'TH', label: 'thailand', phone: '66' },
            { code: 'TJ', label: 'tajikistan', phone: '992' },
            { code: 'TK', label: 'tokelau', phone: '690' },
            { code: 'TL', label: 'timor-leste', phone: '670' },
            { code: 'TM', label: 'turkmenistan', phone: '993' },
            { code: 'TN', label: 'tunisia', phone: '216' },
            { code: 'TO', label: 'tonga', phone: '676' },
            { code: 'TR', label: 'turkey', phone: '90' },
            { code: 'TT', label: 'trinidad and tobago', phone: '1-868' },
            { code: 'TV', label: 'tuvalu', phone: '688' },
            { code: 'TW', label: 'taiwan', phone: '886' },
            { code: 'TZ', label: 'tanzania', phone: '255' },
            { code: 'UA', label: 'ukraine', phone: '380' },
            { code: 'UG', label: 'uganda', phone: '256' },
            { code: 'US', label: 'usa', phone: '1', suggested: true },
            { code: 'UY', label: 'uruguay', phone: '598' },
            { code: 'UZ', label: 'uzbekistan', phone: '998' },
            { code: 'VA', label: 'vatican city', phone: '379' },
            { code: 'VC', label: 'st. vincent grenadines', phone: '1-784' },
            { code: 'VE', label: 'venezuela', phone: '58' },
            { code: 'VG', label: 'british virgin islands', phone: '1-284' },
            { code: 'VN', label: 'vietnam', phone: '84' },
            { code: 'VU', label: 'vanuatu', phone: '678' },
            { code: 'WS', label: 'samoa', phone: '685' },
            { code: 'XK', label: 'kosovo', phone: '383' },
            { code: 'YE', label: 'yemen', phone: '967' },
            { code: 'YT', label: 'mayotte', phone: '262' },
            { code: 'ZA', label: 'south africa', phone: '27' },
            { code: 'ZM', label: 'zambia', phone: '260' },
            { code: 'ZW', label: 'zimbabwe', phone: '263' },
        ];

        let obj = countries.find(country => 
            country.label === 
            isoCode
        );

        if (!obj || !obj['label']) {
            return;
        }

        let icon = typeof String.fromCodePoint !== 'undefined'
            ? obj.code
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : obj.code;

        this.setState({
            icon
        });

    }

    render() {
        const { id, cases } = this.state;

        let oddStyle = { backgroundImage: 'linear-gradient(to bottom right, #A8A8A8, #D3D3D3)' }
        let evenStyle = { backgroundImage: 'linear-gradient(to bottom right, #606060, #D3D3D3)' }
        let accordionText = { color: 'white', fontWeight: 'bold', fontSize: '14px', padding: '5px', paddingLeft: '10px', textShadow: '1px 1px #404040' }
        let cardHeader = { padding: '0px', textAlign: 'left', borderRadius: '10px' }

        return (
            <Card style={ id %2 === 0 ? evenStyle : oddStyle}>
                <Card.Header id={cases.country_name} style={ cardHeader }>
                    <Accordion.Toggle style={ accordionText } as={Button} variant="link" eventKey={cases.country_name}>
                        <span style={{ paddingRight: '5px'}}>{ this.state.icon !== '' ? this.state.icon : <FA name="globe" /> }</span> {cases.country_name}
                        <FA style={{ paddingLeft: '8px', color: '#ff3547', textShadow: '0' }} name="skull-crossbones" /> <NumberFormat value={this.checkIfNoZeroValue(cases.total_death)} displayType={'text'} thousandSeparator={true} />
                        <FA style={{ paddingLeft: '8px', color: '#900990' }} name="virus" /> <NumberFormat value={this.checkIfNoZeroValue(cases.total_cases)} displayType={'text'} thousandSeparator={true} />
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={cases.country_name}>
                    <Card.Body style={{ color: 'black' }}>
                        <MDBTable style={{ backgroundColor: '#FFFFFF' }} bordered>
                            <MDBTableHead>
                                <tr>
                                    <th></th>
                                    <th>Counts</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>Total Cases</td>
                                    <td><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.total_cases)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>New Cases</td>
                                    <td style={ this.checkIfNoZeroValue(cases.new_cases) !== 0 ? { backgroundColor: '#ffc107' } : { backgroundColor: '#FFFFFF' }}><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.new_cases)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>Total Death</td>
                                    <td><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.total_death)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>New Death</td>
                                    <td style={ this.checkIfNoZeroValue(cases.new_death) !== 0 ? { backgroundColor: '#ff3547' } : { backgroundColor: '#FFFFFF' }}><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.new_death)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>Recovered</td>
                                    <td style={ this.checkIfNoZeroValue(cases.total_recovered) !== 0 ? { backgroundColor: '#00c851' } : { backgroundColor: '#FFFFFF' }}><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.total_recovered)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: 'rgba(241, 239, 239, 0.85)' }}>Active Cases</td>
                                    <td style={ this.checkIfNoZeroValue(cases.active_cases) !== 0 ? { backgroundColor: '#34b5e5' } : { backgroundColor: '#FFFFFF' }}><NumberFormat style={{ fontWeight: 'bold' }} value={this.checkIfNoZeroValue(cases.active_cases)} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default CountryCases;