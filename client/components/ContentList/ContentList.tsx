import { NextComponentType } from 'next';
import React, { useState, useEffect } from 'react';

import client from '../../client';

interface Props {
  contentType: string;
}

const Contents: NextComponentType<Props> = ({ contentType }) => {
  const [contents, setContents] = useState([]);

  console.log(contentType);

  useEffect(() => {
    const contentQuery = `*[_type == "${contentType}"]`;

    console.log(contentQuery);

    client.fetch(contentQuery)
      .then((data) => {
        setContents(data);
      });
  }, []);

  console.log(contents)

  return (
    <div>
      <p>Contents</p>
    </div>
  )
}

export default Contents;