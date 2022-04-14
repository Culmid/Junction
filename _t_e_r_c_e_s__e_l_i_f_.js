import { getCartCount } from "./shoppingCart.js";
import { _s_n_o_i_t_p_o_ } from "./config.js";

const _K_C_I_L_C__D_L_O_H_S_E_R_H_T_ = 20;

function _r_e_t_s_a_e__g_g_e() {
  const _r_e_n_i_a_t_n_o_c_ = document.createElement("div");
  _r_e_n_i_a_t_n_o_c_.classList.add("_e_l_o_h_w__e_g_a_p_");

  const _r_e_n_i_a_t_n_o_c_1_ = document.createElement("div");
  _r_e_n_i_a_t_n_o_c_1_.classList.add("_t_r_e_l_a_");
  let _k_c_i_l_c__t_n_u_o_c_ = 0;

  ["mouseenter", "mouseover"].forEach((x) => {
    _r_e_n_i_a_t_n_o_c_1_.addEventListener(x, () => {
      _m_o_d_n_a_r__n_o_i_t_i_s_o_p_(
        _r_e_n_i_a_t_n_o_c_,
        _r_e_n_i_a_t_n_o_c_1_
      );
      _m_o_d_n_a_r__r_o_l_o_c_(_r_e_n_i_a_t_n_o_c_1_);
      _k_c_i_l_c__t_n_u_o_c_++;
      _k_c_e_h_c__k_c_i_l_c__t_n_u_o_c_(
        _k_c_i_l_c__t_n_u_o_c_,
        _r_e_n_i_a_t_n_o_c_
      );
    });
  });

  const _r_a_p_ = document.createElement("p");
  _r_a_p_.classList.add("_t_c_a_f__h_p_a_r_g_a_r_a_p_");
  const _t_n_u_o_c_ = getCartCount();
  _h_c_t_e_f__t_c_a_f_(_t_n_u_o_c_).then((_a_t_a_d_) => {
    _r_a_p_.innerHTML = `${_t_n_u_o_c_}: ${_a_t_a_d_.text}`;
    _r_e_n_i_a_t_n_o_c_.appendChild(_r_e_n_i_a_t_n_o_c_1_);
    _r_e_n_i_a_t_n_o_c_1_.appendChild(_r_a_p_);
  });

  document.body.appendChild(_r_e_n_i_a_t_n_o_c_);
}

function _m_o_d_n_a_r__n_o_i_t_i_s_o_p_(
  _r_e_n_i_a_t_n_o_c_,
  _r_e_n_i_a_t_n_o_c_1_
) {
  _r_e_n_i_a_t_n_o_c_1_.style.top =
    _m_o_d_n_a_r__r_e_b_m_u_n_(_r_e_n_i_a_t_n_o_c_.offsetHeight - 300) + "px";
  _r_e_n_i_a_t_n_o_c_1_.style.left =
    _m_o_d_n_a_r__r_e_b_m_u_n_(_r_e_n_i_a_t_n_o_c_.offsetWidth - 500) + "px";
}

function _m_o_d_n_a_r__r_o_l_o_c_(_r_e_n_i_a_t_n_o_c_1_) {
  _r_e_n_i_a_t_n_o_c_1_.style.backgroundColor = `rgb(
    ${_m_o_d_n_a_r__r_e_b_m_u_n_(255)},
    ${_m_o_d_n_a_r__r_e_b_m_u_n_(255)},
    ${_m_o_d_n_a_r__r_e_b_m_u_n_(255)})`;
}

function _m_o_d_n_a_r__r_e_b_m_u_n_(_x_a_m_) {
  return Math.random() * _x_a_m_;
}

function _k_c_e_h_c__k_c_i_l_c__t_n_u_o_c_(
  _k_c_i_l_c__t_n_u_o_c_,
  _r_e_n_i_a_t_n_o_c_
) {
  if (_k_c_i_l_c__t_n_u_o_c_ > _K_C_I_L_C__D_L_O_H_S_E_R_H_T_) {
    document.body.removeChild(_r_e_n_i_a_t_n_o_c_);
    const _y_a_p__n_o_t_t_u_b_ = document.getElementById("pay-button");
    _y_a_p__n_o_t_t_u_b_.innerHTML = `_r_e_t_s_a_e__g_g_e -🥚-> ${"_r_e_t_s_a_e__g_g_e"
      .replace("__", " ")
      .replace(/_/gi, "")
      .split("")
      .reverse()
      .join("")
      .split(" ")
      .reverse()
      .join(" ")}`;
    _y_a_p__n_o_t_t_u_b_.style.fontSize = "var(--font-size-small)";
    _y_a_p__n_o_t_t_u_b_.disabled = true;
  }
}

function _h_c_t_e_f__t_c_a_f_(_t_n_u_o_c_) {
  return fetch(
    `https://numbersapi.p.rapidapi.com/${_t_n_u_o_c_}/trivia?fragment=true&notfound=floor&json=true`,
    _s_n_o_i_t_p_o_
  )
    .then((response) => response.json())
    .catch((_r_r_e_) => console.error(_r_r_e_));
}

export { _r_e_t_s_a_e__g_g_e };
