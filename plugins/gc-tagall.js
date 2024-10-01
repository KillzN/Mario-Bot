let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`
  let teks = `*Yᴏᴜʀ Pᴏᴛᴇɴᴛɪᴀʟ Is Iɴғɪɴɪᴛᴇ, Dᴀʀᴇ Tᴏ Exᴘʟᴏʀᴇ ɪᴛ.*\n\n ${oi}\n\n➥ _*@𝐦𝐚𝐫𝐪𝐮𝐞𝐳._.𝐠𝐚𝐫𝐜𝐢𝐚:*_\n`
  for (let mem of participants) {
  teks += `🤑 @${mem.id.split('@')[0]}\n`}
  teks += `└ *Mᴀʀɪᴏ-Bᴏᴛ ⇝ @𝐦𝐚𝐫𝐪𝐮𝐞𝐳._.𝐠𝐚𝐫𝐜𝐢𝐚*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler