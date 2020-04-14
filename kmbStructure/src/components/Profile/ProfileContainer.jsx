import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, SetUserProfileActionCreater, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId) {
            userId=1049  }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
         }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect (mapStateToProps, {SetUserProfileActionCreater,getUserProfile,getUserStatus,updateStatus}),
     withRouter,
         withAuthRedirect
        )  (ProfileContainer);