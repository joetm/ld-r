import React from 'react';
import moment from 'moment';
/**
Displays Date/Time values in different formats.
*/
class BasicDateTimeView extends React.Component {
    getFormat() {
        //default format
        let format = 'YYYY-MM-DD HH:mm:ss Z';
        if(this.props.config && this.props.config.dateTimeFormat){
            format = this.props.config.dateTimeFormat;
        }
        if(this.props.dateTimeFormat){
            format = this.props.dateTimeFormat;
        }
        return format;
    }
    render() {
        let val;
        val = this.props.spec.value;
        val = moment(val).format(this.getFormat());
        return (
            <div className="ui" ref="basicDateTimeView">
                {val}
            </div>
        );
    }
}
BasicDateTimeView.propTypes = {
    /**
    Date/Time format e.g. YYYY-MM-DD HH:mm:ss
    */
    dateTimeFormat: React.PropTypes.string,
    /**
    LD-R Configurations object
    */
    config: React.PropTypes.object,
    /**
    LD-R spec
    */
    spec: React.PropTypes.object
};
export default BasicDateTimeView;
