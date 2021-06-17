import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { signOutUser } from '~/store/modules/user/actions';
import { signOutPhonenumber } from '~/store/modules/phonenumber/actions';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function UpdateProfile() {
  const profile = useSelector(state => state.user.profile);
  const image = useSelector(state => state.image.image);
  const user_id = useSelector(state => state.user.profile.id);
  const dispatch = useDispatch();
  const genderOptions = [ 'Female', 'Male', 'Alien', 'Other']

  const [user, setUser] = useState([]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState();

  const { register, handleSubmit } = useForm();
  // console.log(image)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const userResponse = await api.get(`users/${user_id}`)
    console.log(userResponse.data)
    setUser(userResponse.data)
    setFirstName(userResponse.data.first_name)
    setLastName(userResponse.data.last_name)
    setUserName(userResponse.data.user_name)
    setEmail(userResponse.data.email)
    setBirthDate(userResponse.data.birth_date)
    setGender(userResponse.data.gender)
  }

  const onSubmit = ({
    first_name, last_name, user_name,
    oldPassword, password, confirmPassword,
    email, birth_date, gender, preview
  }) => {
    const phonenumber = profile.phonenumber
    console.log(preview)

    dispatch(updateProfileRequest({
      first_name, last_name, user_name,
      oldPassword, password, confirmPassword,
      phonenumber, email, birth_date, gender, image, preview
    }));
  }

  async function handleSignOut() {
    await dispatch(signOutUser(null))
    await dispatch(signOutPhonenumber(null, false))
    await dispatch(signOut());
  }
  // ---------------------------------------------------------------------------
  return (

    <Container>
      <div className="profile-div">



        <form onSubmit={handleSubmit(onSubmit)}>
          <AvatarInput name="avatarInput"/>
          <div className="form-body-div">
          <div className="line-div">
            <input name="first_name" placeholder="Nome" ref={register} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input name="last_name" placeholder="Sobrenome" ref={register} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="line-div">
            <input name="user_name" placeholder="Nome de usuário" ref={register} value={userName} onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <div className="line-div">
            <input name="birth_date" placeholder="Data de nascimento" ref={register} value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
            <select name="gender" placeholder="Gênero" ref={register} value={gender} onChange={(e) => setGender(e.target.value)}>
              {genderOptions.map(g =>
                <option key={g} value={g}>{g}</option>
              )}
            </select>
          </div>
          <div className="line-div">
            <input name="email" placeholder="e-mail" ref={register} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="line-div">
            <input
              name="oldPassword"
              type="password"
              placeholder="Senha atual"
              ref={register}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="line-div">
            <input name="password" type="password" placeholder="Sua senha nova" ref={register} value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="line-div">
            <input name="confirmPassword" type="password" placeholder="Confirmar a senha nova" ref={register} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <div className="button-div">
            <button className="save-button" type="submit">Save</button>
            <Link to="/home">
              <button className="back-button" type="button">Back</button>
            </Link>
            <button className="exit-button" type="button" onClick={handleSignOut}>Sair do Godtasker</button>
          </div>

          </div>
        </form>

      </div>

    </Container>
  );
}
