import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            BR
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="𝗕𝘆𝗿𝗲𝗱𝗱𝘆 𝗦𝗶𝗱𝗱𝗵𝗮𝗿𝘁𝗵 𝗥𝗲𝗱𝗱𝘆"
        subheader="Oct 10, 2023"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://i.pinimg.com/originals/d4/8a/f0/d48af0595ed679670af582388c796e8c.jpg"
        alt="AP YOUTH LEADER"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        𝑩𝒚𝒓𝒆𝒅𝒅𝒚 𝑺𝒊𝒅𝒅𝒉𝒂𝒓𝒕𝒉 𝑹𝒆𝒅𝒅𝒚 𝒘𝒂𝒔 𝒑𝒐𝒓𝒕𝒓𝒂𝒚𝒆𝒅 𝒂𝒔 𝒂 𝒇𝒊𝒓𝒆𝒃𝒓𝒂𝒏𝒅 𝒃𝒚 𝒀𝑺𝑹 𝑪𝒐𝒏𝒈𝒓𝒆𝒔𝒔 𝒃𝒆𝒇𝒐𝒓𝒆 2019.
        𝑯𝒆 𝒕𝒓𝒊𝒆𝒅 𝒕𝒐 𝒂𝒕𝒕𝒓𝒂𝒄𝒕 𝒚𝒐𝒖𝒕𝒉 𝒘𝒊𝒕𝒉 𝒉𝒊𝒔 𝒐𝒓𝒂𝒕𝒐𝒓𝒚 𝒔𝒌𝒊𝒍𝒍𝒔.
        𝑻𝒉𝒂𝒕 𝒘𝒐𝒓𝒌𝒆𝒅 𝒘𝒆𝒍𝒍 𝒅𝒖𝒓𝒊𝒏𝒈 𝒕𝒉𝒂𝒕 𝒕𝒊𝒎𝒆 𝒊𝒏 𝑱𝒂𝒈𝒂𝒏’𝒔 𝒘𝒂𝒗𝒆.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>𝑩𝑰𝑶𝑮𝑹𝑨𝑷𝑯𝒀</Typography>
          <Typography paragraph>
          𝘉𝘺𝘳𝘦𝘥𝘥𝘺 𝘚𝘪𝘥𝘥𝘩𝘢𝘳𝘵𝘩 𝘙𝘦𝘥𝘥𝘺 𝘪𝘴 𝘢𝘯 𝘐𝘯𝘥𝘪𝘢𝘯 𝘱𝘰𝘭𝘪𝘵𝘪𝘤𝘪𝘢𝘯 𝘧𝘳𝘰𝘮 𝘠𝘚𝘙 𝘊𝘰𝘯𝘨𝘳𝘦𝘴𝘴 𝘱𝘢𝘳𝘵𝘺
          </Typography>
          <Typography paragraph>
          𝖭𝖺𝗇𝖽𝗂𝗄𝗈𝗍𝗄𝗎𝗋 𝖼𝗈𝗇𝗌𝗍𝗂𝗍𝗎𝖾𝗇𝖼𝗒 𝗂𝗇-𝖼𝗁𝖺𝗋𝗀𝖾 𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝖲𝗂𝖽𝖽𝗁𝖺𝗋𝗍𝗁 𝖱𝖾𝖽𝖽𝗒 𝗂𝗌 𝖺 𝗉𝗈𝗉𝗎𝗅𝖺𝗋 𝗒𝗈𝗎𝗇𝗀 𝗉𝗈𝗅𝗂𝗍𝗂𝖼𝗂𝖺𝗇 𝗂𝗇 𝗍𝗁𝖾 𝗌𝗍𝖺𝗍𝖾 𝗈𝖿 𝖠𝗇𝖽𝗁𝗋𝖺 𝖯𝗋𝖺𝗌𝖾𝗌𝗁.
          𝖱𝖾𝖼𝖾𝗇𝗍𝗅𝗒 𝗍𝗁𝖾 𝖠𝖯 𝖦𝗈𝗏𝗍 𝗁𝖺𝗌 𝗈𝖿𝖿𝖾𝗋𝖾𝖽 𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝖲𝗂𝖽𝖽𝗁𝖺𝗋𝗍𝗁 𝖱𝖾𝖽𝖽𝗒 𝖺𝗌 𝗍𝗁𝖾 𝖭𝖾𝗐 𝖢𝗁𝖺𝗂𝗋𝗆𝖺𝗇 𝗈𝖿 𝖲𝗉𝗈𝗋𝗍𝗌 𝖠𝗎𝗍𝗁𝗈𝗋𝗂𝗍𝗒 𝗈𝖿 𝖠𝗇𝖽𝗁𝗋𝖺 𝖯𝗋𝖺𝖽𝖾𝗌𝗁.
          𝖠𝗅𝗌𝗈, 𝖲𝖠𝖠𝖯 𝖢𝗁𝖺𝗂𝗋𝗆𝖺𝗇 𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝖲𝗂𝖽𝖽𝗁𝖺𝗋𝗍𝗁𝖺 𝖱𝖾𝖽𝖽𝗒 𝗐𝖺𝗌 𝗆𝖺𝖽𝖾 𝗍𝗁𝖾 𝗉𝗋𝖾𝗌𝗂𝖽𝖾𝗇𝗍 𝗈𝖿 𝗍𝗁𝖾 𝖸𝖲𝖱𝖢𝖯 𝖲𝗍𝖺𝗍𝖾 𝗒𝗈𝗎𝗍𝗁 𝗐𝗂𝗇𝗀 𝗂𝗇 2022 𝖩𝗎𝗇𝖾.
          𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝖲𝗂𝖽𝖽𝗁𝖺𝗋𝗍𝗁 𝖱𝖾𝖽𝖽𝗒 𝗂𝗌 𝖺𝗇 𝖨𝗇𝖽𝗂𝖺𝗇 𝗉𝗈𝗅𝗂𝗍𝗂𝖼𝗂𝖺𝗇 𝗐𝗁𝗈 𝗌𝖾𝗋𝗏𝖾𝗌 𝖺𝗌 𝖺𝗇 𝖨𝗇𝖼𝗁𝖺𝗋𝗀𝖾 𝖺𝗇𝖽 𝖼𝗈-𝖼𝗈𝗈𝗋𝖽𝗂𝗇𝖺𝗍𝗈𝗋 𝗈𝖿 𝖸𝖲𝖱 𝖼𝗈𝗇𝗀𝗋𝖾𝗌𝗌 𝗉𝖺𝗋𝗍𝗒 𝗂𝗇 𝖭𝖺𝗇𝖽𝗂𝗄𝗈𝗍𝗎𝗋 𝖼𝗈𝗇𝗌𝗍𝗂𝗍𝗎𝖾𝗇𝖼𝗒.
          𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝗂𝗌 𝖺 𝗌𝗍𝗋𝗈𝗇𝗀 𝗌𝗎𝗉𝗉𝗈𝗋𝗍𝖾𝗋 𝗈𝖿 𝖳𝖾𝗅𝗎𝗀𝗎 𝖣𝖾𝗌𝖺𝗆 𝖯𝖺𝗋𝗍𝗒 (𝖳𝖣𝖯) 𝗌𝗂𝗇𝖼𝖾 2018. 𝖡𝗎𝗍, 𝗁𝖾 𝖽𝖾𝖼𝗂𝖽𝖾𝖽 𝗍𝗈 𝗃𝗈𝗂𝗇 𝗍𝗁𝖾 𝗈𝗉𝗉𝗈𝗌𝗂𝗍𝗂𝗈𝗇 𝗉𝖺𝗋𝗍𝗒 𝖸𝖲𝖱𝖢𝖯.
          𝖧𝖾 𝗂𝗌 𝖾𝗅𝖾𝖼𝗍𝖾𝖽 𝖺𝗌 𝖢𝗁𝖺𝗂𝗋𝗆𝖺𝗇 𝗈𝖿 𝖲𝗉𝗈𝗋𝗍𝗌 𝖠𝗎𝗍𝗁𝗈𝗋𝗂𝗍𝗒 𝗈𝖿 𝖠𝗇𝖽𝗁𝗋𝖺 𝖯𝗋𝖺𝖽𝖾𝗌𝗁 𝗂𝗇 2021.
          </Typography>
          <Typography paragraph>
          𝖨𝗇 𝖮𝖼𝗍𝗈𝖻𝖾𝗋 2019, 𝖡𝗒𝗋𝖾𝖽𝖽𝗒 𝖲𝗂𝖽𝖽𝗁𝖺𝗋𝗍𝗁 𝖱𝖾𝖽𝖽𝗒’𝗌 𝖼𝗋𝖾𝗐 𝗂𝗇𝖽𝗂𝗏𝗂𝖽𝗎𝖺𝗅𝗌 𝖼𝗈𝗇𝖼𝖾𝗋𝗇𝖾𝖽 𝗐𝗂𝗍𝗁𝗂𝗇 𝗍𝗁𝖾 𝗌𝗍𝗈𝗇𝖾 𝖼𝗈𝗆𝖻𝖺𝗍 𝗍𝗈 𝗌𝖺𝗒 𝖾𝗀𝗀 𝖽𝖾𝗅𝗂𝖼𝖺𝗍𝖾 𝗂𝗇 𝗈𝗉𝗉𝗈𝗌𝗂𝗍𝗂𝗈𝗇 𝗍𝗈 𝗆𝗂𝗇𝗂𝗌𝗍𝖾𝗋 𝖡𝗎𝗀𝗀𝖺𝗇𝖺 𝖱𝖺𝗃𝖾𝗇𝖽𝗋𝖺𝗇𝖺𝗍𝗁 𝖱𝖾𝖽𝖽𝗒’𝗌 𝖼𝗋𝖾𝗐.
          </Typography>
          <Typography>
           ＹＳＲＣＰ <br></br>
          ᴀɴᴅʜʀᴀ ᴘʀᴀᴅᴇꜱʜ
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}