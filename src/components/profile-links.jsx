import '../styles/profile-link.css'
import PropTypes from 'prop-types';

const ProfileLinks = ({link}) => {
  return (
    <div className="profile-link">
       <p>{link}</p>
    </div>
  )
}

ProfileLinks.propTypes = {
  link: PropTypes.string.isRequired,
};
export default ProfileLinks;