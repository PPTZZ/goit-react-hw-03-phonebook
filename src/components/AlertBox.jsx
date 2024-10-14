import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PropTypes from 'prop-types';

const AlertBox = ({ name, isOpen, onAlertToggle }) => {
	console.log(isOpen);
	return (
		<Dialog open={isOpen}>
			<DialogTitle
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					color: 'error.main',
				}}
			>
				<ErrorIcon sx={{ color: 'error.main' }} />
				Faileure
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{name} is already in contact list. Please try something else.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button sx={{ color: 'black' }} onClick={onAlertToggle}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
AlertBox.propTypes = {
	name: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
	onAlertToggle: PropTypes.func.isRequired,
};
export default AlertBox;
