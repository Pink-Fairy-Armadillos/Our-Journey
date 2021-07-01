import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function AddMarkerDialogue(props) {
  const [open, setOpen] = useState(true);
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [locationLat, setLocationLat] = useState(props.latitude);
  const [locationLong, setLocationLong] = useState(props.longitude);

  //if (props.openDialogue === 'open') setOpen(true)
  console.log('Latitude: ', locationLat);
  console.log('Latitude Props: ', props.latitude);

  const handleClose = () => {};

  const handleCancel = () => {
    props.onDialogueClose();
  };

  // if (props.openDialogue) setOpen(true)

  return (
    <Dialog
      open={props.openDialogue}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Add a new Marker on the Map
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Log the details of your location and the Trip!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="location"
          label="Location"
          type="location"
          fullWidth
          onChange={(e) => setLocation(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="rating"
          label="Rating"
          type="rating"
          fullWidth
          onChange={(e) => setRating(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="review"
          label="Enter your Review"
          type="review"
          fullWidth
          onChange={(e) => setReview(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="tripDate"
          label="Trip Date (MM-DD-YYYY)"
          type="tripDate"
          fullWidth
          onChange={(e) => setTripDate(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="locationLat"
          label="Latitude"
          type="locationLat"
          fullWidth
          defaultValue={props.latitude}
          // onChange={(e) => setLocationLat(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="locationLong"
          label="Longitude"
          type="locationLong"
          fullWidth
          value={props.longitude}
          onChange={(e) => setLocationLong(e.currentTarget.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onDialogueClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            console.log(nickname);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
