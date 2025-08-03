import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../themes'

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
`

export const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.text};
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textMuted};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const AboutContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`

export const ProfileSection = styled.div`
  flex: 0 0 300px;

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
  }
`

export const ProfileImage = styled.img`
  /* width: 100%; */
  height: 300px;
  border-radius: 20px;
  object-fit: contain;
  border: 3px solid ${colors.primary};
  box-shadow: 0 10px 30px rgba(107, 70, 193, 0.3);

  @media (max-width: ${breakpoints.mobile}) {
    /* width: 250px; */
    height: 250px;
  }
`

export const InfoSection = styled.div`
  flex: 1;
`

export const InfoTitle = styled.h3`
  font-size: 2rem;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const InfoDescription = styled.p`
  font-size: 1.1rem;
  color: ${colors.text};
  line-height: 1.7;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SkillItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(107, 70, 193, 0.2);
  backdrop-filter: blur(10px);
`

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`

export const SkillName = styled.span`
  font-size: 1.1rem;
  color: ${colors.text};
  font-weight: 600;
`

export const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: ${colors.textHighlight};
  font-weight: 500;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`

export const ProgressFill = styled.div<{ level: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${colors.secondary}, ${colors.accent});
  border-radius: 4px;
  --progress-width: ${(props) => props.level}%;
  animation: ${progressAnimation} 2s ease-out forwards;
  animation-delay: 0.5s;
  width: 0%;
`
