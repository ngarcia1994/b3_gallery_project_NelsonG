import LugarMaravilloso3 from '../assets/img/LugarMaravilloso1.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso3 = ( { className } ) => {
  return (
    <img src={LugarMaravilloso3} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso3.propTypes = {
  className: PropTypes.string
}