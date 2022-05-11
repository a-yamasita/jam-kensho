import io
import sys
import os
import textwrap
from pathlib import Path

component = sys.argv[1]
path = './gats/src/views/v1/atoms/' + component
if not (os.path.exists(path)):
    f = open(path + '.tsx', 'w', encoding='UTF-8')
    s = """
        import React from 'react';
        import {{ {component} as _{component}_ }} from '@mui/material';

        export default function {component}(props){{
            return (
                <_{component}_ {{...props}}>
                    {{props.children}}
                </_{component}_>
            );
        }}
    """.format(component=component)
    f.write(textwrap.dedent(s)[1:-1])
    f.close()
else:
    print("File exists: " + component)