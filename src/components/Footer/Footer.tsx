import { connect } from "react-redux";
import {setFilter} from '../../redux/actions/index';
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span></span>
        items left
      </div>
      <div>
        <div>all</div>
        <div>active</div>
      </div>
      <div>Clear completed</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { activeFilter: state.filter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(Footer);
