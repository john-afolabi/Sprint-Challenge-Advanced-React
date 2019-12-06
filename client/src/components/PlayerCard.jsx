import React from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";

export default function PlayerCard({ name, country, searches }) {
  return (
    <div className='mb-4'>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{country}</CardSubtitle>
          <CardText>{searches}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
