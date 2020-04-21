import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRolls } from '../redux/rolls/rolls-actions';
import RollItem from './RollItem';
import { createStructuredSelector } from 'reselect';
import { selectRollItems, selectLoading } from '../redux/rolls/rolls-selector';
import PropTypes from 'prop-types';
import Loader from './Loader';

const RollsList = ({ getRolls, rollItems, loading }) => {
    useEffect(() => {
        getRolls();
    }, [ getRolls ]);

    return (
        <div className="col-md-8">
			<div className="row">
                {
                    loading ? <Loader />
                    : rollItems.map(roll => {
                        return <RollItem key={roll.id} item={roll}/>
                    })
                }
            </div>
		</div>
    );
}

const mapStateToProps = createStructuredSelector({
    rollItems: selectRollItems,
    loading: selectLoading
});


RollItem.propTypes = {
    getRolls: PropTypes.func,
};


export default connect(mapStateToProps, { getRolls })(RollsList);