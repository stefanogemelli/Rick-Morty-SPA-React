import { DivCard, ButtonCard, DivImg, TitleBg, H2Name, H2Normal } from './CardStyled'

export default function Card({ info, onClose }) {

   return (
      <DivCard key={info.id}>
         <ButtonCard onClick={() => onClose(info.id)}>X</ButtonCard>
         <DivImg>
            <img src={info.image} alt={info.name} />
            <TitleBg>
               <H2Name>{info.name}</H2Name>
            </TitleBg>
         </DivImg>
         <H2Normal>{info.species}</H2Normal>
         <H2Normal>{info.gender}</H2Normal>

      </DivCard>
   );
}
