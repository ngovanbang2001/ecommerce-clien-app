import { FC, Fragment } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";

interface Props {
  isAscending?: boolean;
  activeColor?: string;
}

const SortIcon: FC<Props> = ({
  isAscending,
  activeColor = "#363634"
}) => {
  return (
    <Fragment>
      {isAscending === undefined ? (
        <FaSort size={14} color="#D0D0C8" />
      ) : isAscending === true ? (
        <FaSortUp
          color={activeColor}
          size={16}
          style={{ marginBottom: "-8px" }}
        />
      ) : (
        <FaSortDown
          color={activeColor}
          size={16}
          style={{ marginTop: "-8px" }}
        />
      )}
    </Fragment>
  );
};

export default SortIcon;
