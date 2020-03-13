import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react";
import moment from "moment";

class Cals extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            rangePicker: {
                startDate: moment(),
                endDate: moment().add(7, "days")
            },
            isShowCalendar: false
        };
    }
    handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    handleClickOpenCalendar = () => {
        this.setState({
            isShowCalendar: true
        });
    };

    handleClickCloseCalendar = () => {
        this.setState({
            isShowCalendar: false
        });
    };

    render() {
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
        const { isShowCalendar } = this.state;
        return (
            <main>
                
                {isShowCalendar && (

                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={this.handleSelect}
                    />
                )}


                <input
                    type="text"
                    readOnly
                    onClick={this.handleClickOpenCalendar}
                    // value={
                    //     rangePicker["startDate"] &&
                    //     rangePicker["startDate"].format(format).toString()
                    // }
                />
            </main>
        )
    }
}

export default Cals;