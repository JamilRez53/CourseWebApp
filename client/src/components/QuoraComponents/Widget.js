import React from 'react'
import WidgetContent from './WidgetContent';
import "./css/Widget.css";
import { Typography } from '@mui/material';
const Widget = () => {
  return (
    <div className="widget">
    <div className="widget__header">
      <Typography variant='h5'>
      Space to follow
      </Typography>
    </div>
    <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget