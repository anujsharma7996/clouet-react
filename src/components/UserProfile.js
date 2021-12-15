import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../actions/profile";

class UserProfile extends Component {
  componentDidMount() {
    const { match } = this.props;

    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    console.log("this.props", params);
    const user = profile.user;

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProp({ profile }) {
  return {
    profile,
  };
}

export default connect(mapStateToProp)(UserProfile);
