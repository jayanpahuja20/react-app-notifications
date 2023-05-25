import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Tooltip } from '@mui/material';

const NotificationBell = ({iconColor, badgeContent}) => {
    const newNotifications = `You have ${badgeContent} new Notifications!`;
    const noNotifications = 'You have no new Notifications!';
    return (
    <Tooltip title={badgeContent > 0 ? newNotifications : noNotifications}>
        <IconButton color={iconColor}>
            <Badge badgeContent={badgeContent} color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    </Tooltip>
    );
}

export default NotificationBell;
