import styled from 'styled-components'
import { Card } from 'antd'

export const ShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  
  .ant-collapse {
    background: transparent;
    border: none;
  }
  
  .ant-collapse-item {
    border: 1px solid #333;
    border-radius: 8px;
    background: #111;
    margin-bottom: 0;
  }
  
  .ant-collapse-header {
    background: #1a1a1a;
    border-radius: 8px 8px 0 0;
    padding: 12px 16px;
    color: #fff;
  }
  
  .ant-collapse-content {
    background: #111;
    border-radius: 0 0 8px 8px;
  }
  
  .ant-collapse-content-box {
    padding: 0;
  }
  
  .ant-collapse-expand-icon {
    color: #1890ff;
  }
`

export const CodeBlock = styled.pre`
  background: #1a1a1a;
  color: #e0e0e0;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.4;
  margin: 8px 0;
  border: 1px solid #333;
  
  .keyword { color: #569cd6; }
  .string { color: #ce9178; }
  .comment { color: #6a9955; }
  .function { color: #dcdcaa; }
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
`

export const ArchCard = styled(Card)`
  margin-bottom: 12px;
  background: #111;
  border: 1px solid #333;
  
  .ant-card-head { 
    background: #1a1a1a;
    border-bottom: 1px solid #333;
    padding: 8px 16px;
    min-height: auto;
  }
  
  .ant-card-body {
    padding: 12px;
  }
  
  .ant-card-head-title {
    color: #fff;
    font-size: 14px;
  }
`