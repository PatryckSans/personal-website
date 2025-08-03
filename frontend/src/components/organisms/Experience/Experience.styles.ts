import styled from 'styled-components'
import { colors, breakpoints } from '../../../themes'

export const ExperienceContainer = styled.section`
  padding: 5rem 2rem;
`

export const ExperienceContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const TimelineWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, ${colors.accent});
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(107, 70, 193, 0.5);
    
    @media (max-width: ${breakpoints.mobile}) {
      left: 12px;
      width: 2px;
    }
  }
`

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  gap: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.5rem;
  }
`

export const TimelineMarker = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.8);
  box-shadow: 
    0 0 0 3px ${colors.primary},
    0 0 20px rgba(107, 70, 193, 0.6),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    width: 24px;
    height: 24px;
    
    &::before {
      width: 6px;
      height: 6px;
    }
  }
`

export const TimelineContent = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(107, 70, 193, 0.3);
  border-radius: 16px;
  padding: 2rem;
  margin-left: 2rem;
  backdrop-filter: blur(15px);
  flex: 1;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(107, 70, 193, 0.1), rgba(59, 130, 246, 0.05));
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(107, 70, 193, 0.2);
    border-color: rgba(107, 70, 193, 0.5);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 1.5rem;
    padding: 1.5rem;
    border-radius: 12px;
  }
`

export const ItemTitle = styled.h3`
  color: ${colors.text};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, ${colors.text}, ${colors.textHighlight});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const ItemCompany = styled.h4`
  color: ${colors.textHighlight};
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
  position: relative;
  
  &::before {
    content: '🏢';
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`

export const ItemPeriod = styled.span`
  color: ${colors.text};
  font-size: 0.85rem;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(107, 70, 193, 0.2));
  padding: 0.4rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(59, 130, 246, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  display: inline-block;
  position: relative;
  
  &::before {
    content: '📅';
    margin-right: 0.5rem;
  }
`

export const ItemDescription = styled.p`
  color: ${colors.text};
  margin-top: 1.2rem;
  line-height: 1.7;
  opacity: 0.9;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 3px;
    height: calc(100% - 1rem);
    background: linear-gradient(to bottom, ${colors.secondary}, transparent);
    border-radius: 2px;
  }
`
