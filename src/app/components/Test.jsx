import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'

const styles = {
  div: {
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    // border: '1px solid #123456',
  },
  span: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 'normal',
  }
}

module.exports = () => (
  <Card className="flex-item-content" style={{background:'#2cbfd9'}}>
    <CardTitle title="Hours of Operation" titleColor="white" style={styles.title} />
    <CardText style={styles.div}>
      <div style={styles.span}>
        <table border="0" style={{width:'100%'}}>
          <tbody>
            <tr>
              <td className="td-left">Sunday</td>
              <td className="td-center">:</td>
              <td className="td-right">closed</td>
            </tr>
            {/*
            <tr><td colspan="3"><Divider/></td></tr>
            */}
            <tr>
              <td className="td-left">Monday &ndash; Friday</td>
              <td className="td-center">:</td>
              <td className="td-right">10 am to 8 pm</td>
            </tr>
            <tr>
              <td className="td-left">Saturday</td>
              <td className="td-center">:</td>
              <td className="td-right">closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardText>
  </Card>
)