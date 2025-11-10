import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

interface Country {
  name: string;
  code: string;
  flagUrl: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  countries: Country[] = [
    {
      name: 'Afghanistan',
      code: '+93',
      flagUrl: 'https://flagcdn.com/w20/af.png',
    },
    {
      name: 'Aland Islands',
      code: '+358',
      flagUrl: 'https://flagcdn.com/w20/ax.png',
    },
    {
      name: 'Albania',
      code: '+355',
      flagUrl: 'https://flagcdn.com/w20/al.png',
    },
    {
      name: 'Algeria',
      code: '+213',
      flagUrl: 'https://flagcdn.com/w20/dz.png',
    },
    {
      name: 'American Samoa',
      code: '+1684',
      flagUrl: 'https://flagcdn.com/w20/as.png',
    },
    { name: 'Angola', code: '+244', flagUrl: 'https://flagcdn.com/w20/ao.png' },
    {
      name: 'Anguilla',
      code: '+1264',
      flagUrl: 'https://flagcdn.com/w20/ai.png',
    },
    {
      name: 'Antarctica',
      code: '+672',
      flagUrl: 'https://flagcdn.com/w20/aq.png',
    },
    {
      name: 'Antigua and Barbuda',
      code: '+1268',
      flagUrl: 'https://flagcdn.com/w20/ag.png',
    },
    {
      name: 'Argentina',
      code: '+54',
      flagUrl: 'https://flagcdn.com/w20/ar.png',
    },
    {
      name: 'Armenia',
      code: '+374',
      flagUrl: 'https://flagcdn.com/w20/am.png',
    },
    { name: 'Aruba', code: '+297', flagUrl: 'https://flagcdn.com/w20/aw.png' },
    {
      name: 'Australia',
      code: '+61',
      flagUrl: 'https://flagcdn.com/w20/au.png',
    },
    { name: 'Austria', code: '+43', flagUrl: 'https://flagcdn.com/w20/at.png' },
    {
      name: 'Azerbaijan',
      code: '+994',
      flagUrl: 'https://flagcdn.com/w20/az.png',
    },
    {
      name: 'Bahamas',
      code: '+1242',
      flagUrl: 'https://flagcdn.com/w20/bs.png',
    },
    {
      name: 'Bahrain',
      code: '+973',
      flagUrl: 'https://flagcdn.com/w20/bh.png',
    },
    {
      name: 'Bangladesh',
      code: '+880',
      flagUrl: 'https://flagcdn.com/w20/bd.png',
    },
    {
      name: 'Barbados',
      code: '+1246',
      flagUrl: 'https://flagcdn.com/w20/bb.png',
    },
    {
      name: 'Belarus',
      code: '+375',
      flagUrl: 'https://flagcdn.com/w20/by.png',
    },
    { name: 'Belgium', code: '+32', flagUrl: 'https://flagcdn.com/w20/be.png' },
    { name: 'Belize', code: '+501', flagUrl: 'https://flagcdn.com/w20/bz.png' },
    { name: 'Benin', code: '+229', flagUrl: 'https://flagcdn.com/w20/bj.png' },
    {
      name: 'Bermuda',
      code: '+1441',
      flagUrl: 'https://flagcdn.com/w20/bm.png',
    },
    { name: 'Bhutan', code: '+975', flagUrl: 'https://flagcdn.com/w20/bt.png' },
    {
      name: 'Bolivia',
      code: '+591',
      flagUrl: 'https://flagcdn.com/w20/bo.png',
    },
    {
      name: 'Bosnia and Herzegovina',
      code: '+387',
      flagUrl: 'https://flagcdn.com/w20/ba.png',
    },
    {
      name: 'Botswana',
      code: '+267',
      flagUrl: 'https://flagcdn.com/w20/bw.png',
    },
    { name: 'Brazil', code: '+55', flagUrl: 'https://flagcdn.com/w20/br.png' },
    {
      name: 'British Indian Ocean Territory',
      code: '+246',
      flagUrl: 'https://flagcdn.com/w20/io.png',
    },
    {
      name: 'Brunei Darussalam',
      code: '+673',
      flagUrl: 'https://flagcdn.com/w20/bn.png',
    },
    {
      name: 'Bulgaria',
      code: '+359',
      flagUrl: 'https://flagcdn.com/w20/bg.png',
    },
    {
      name: 'Burkina Faso',
      code: '+226',
      flagUrl: 'https://flagcdn.com/w20/bf.png',
    },
    {
      name: 'Burundi',
      code: '+257',
      flagUrl: 'https://flagcdn.com/w20/bi.png',
    },
    {
      name: 'Cambodia',
      code: '+855',
      flagUrl: 'https://flagcdn.com/w20/kh.png',
    },
    {
      name: 'Cameroon',
      code: '+237',
      flagUrl: 'https://flagcdn.com/w20/cm.png',
    },
    { name: 'Canada', code: '+1', flagUrl: 'https://flagcdn.com/w20/ca.png' },
    {
      name: 'Cape Verde',
      code: '+238',
      flagUrl: 'https://flagcdn.com/w20/cv.png',
    },
    {
      name: 'Cayman Islands',
      code: '+1345',
      flagUrl: 'https://flagcdn.com/w20/ky.png',
    },
    {
      name: 'Central African Republic',
      code: '+236',
      flagUrl: 'https://flagcdn.com/w20/cf.png',
    },
    { name: 'Chad', code: '+235', flagUrl: 'https://flagcdn.com/w20/td.png' },
    { name: 'Chile', code: '+56', flagUrl: 'https://flagcdn.com/w20/cl.png' },
    { name: 'China', code: '+86', flagUrl: 'https://flagcdn.com/w20/cn.png' },
    {
      name: 'Christmas Island',
      code: '+61',
      flagUrl: 'https://flagcdn.com/w20/cx.png',
    },
    {
      name: 'Cocos (Keeling) Islands',
      code: '+61',
      flagUrl: 'https://flagcdn.com/w20/cc.png',
    },
    {
      name: 'Colombia',
      code: '+57',
      flagUrl: 'https://flagcdn.com/w20/co.png',
    },
    {
      name: 'Comoros',
      code: '+269',
      flagUrl: 'https://flagcdn.com/w20/km.png',
    },
    { name: 'Congo', code: '+242', flagUrl: 'https://flagcdn.com/w20/cg.png' },
    {
      name: 'Congo, Democratic Republic of the',
      code: '+243',
      flagUrl: 'https://flagcdn.com/w20/cd.png',
    },
    {
      name: 'Cook Islands',
      code: '+682',
      flagUrl: 'https://flagcdn.com/w20/ck.png',
    },
    {
      name: 'Costa Rica',
      code: '+506',
      flagUrl: 'https://flagcdn.com/w20/cr.png',
    },
    {
      name: "Cote D'Ivoire",
      code: '+225',
      flagUrl: 'https://flagcdn.com/w20/ci.png',
    },
    {
      name: 'Croatia',
      code: '+385',
      flagUrl: 'https://flagcdn.com/w20/hr.png',
    },
    { name: 'Cuba', code: '+53', flagUrl: 'https://flagcdn.com/w20/cu.png' },
    { name: 'Cyprus', code: '+357', flagUrl: 'https://flagcdn.com/w20/cy.png' },
    {
      name: 'Czech Republic',
      code: '+420',
      flagUrl: 'https://flagcdn.com/w20/cz.png',
    },
    { name: 'Denmark', code: '+45', flagUrl: 'https://flagcdn.com/w20/dk.png' },
    {
      name: 'Djibouti',
      code: '+253',
      flagUrl: 'https://flagcdn.com/w20/dj.png',
    },
    {
      name: 'Dominica',
      code: '+1767',
      flagUrl: 'https://flagcdn.com/w20/dm.png',
    },
    {
      name: 'Dominican Republic',
      code: '+1809',
      flagUrl: 'https://flagcdn.com/w20/do.png',
    },
    {
      name: 'Ecuador',
      code: '+593',
      flagUrl: 'https://flagcdn.com/w20/ec.png',
    },
    { name: 'Egypt', code: '+20', flagUrl: 'https://flagcdn.com/w20/eg.png' },
    {
      name: 'El Salvador',
      code: '+503',
      flagUrl: 'https://flagcdn.com/w20/sv.png',
    },
    {
      name: 'Equatorial Guinea',
      code: '+240',
      flagUrl: 'https://flagcdn.com/w20/gq.png',
    },
    {
      name: 'Eritrea',
      code: '+291',
      flagUrl: 'https://flagcdn.com/w20/er.png',
    },
    {
      name: 'Estonia',
      code: '+372',
      flagUrl: 'https://flagcdn.com/w20/ee.png',
    },
    {
      name: 'Ethiopia',
      code: '+251',
      flagUrl: 'https://flagcdn.com/w20/et.png',
    },
    {
      name: 'Falkland Islands (Malvinas)',
      code: '+500',
      flagUrl: 'https://flagcdn.com/w20/fk.png',
    },
    {
      name: 'Faroe Islands',
      code: '+298',
      flagUrl: 'https://flagcdn.com/w20/fo.png',
    },
    { name: 'Fiji', code: '+679', flagUrl: 'https://flagcdn.com/w20/fj.png' },
    {
      name: 'Finland',
      code: '+358',
      flagUrl: 'https://flagcdn.com/w20/fi.png',
    },
    { name: 'France', code: '+33', flagUrl: 'https://flagcdn.com/w20/fr.png' },
    {
      name: 'French Guiana',
      code: '+594',
      flagUrl: 'https://flagcdn.com/w20/gf.png',
    },
    {
      name: 'French Polynesia',
      code: '+689',
      flagUrl: 'https://flagcdn.com/w20/pf.png',
    },
    { name: 'Gabon', code: '+241', flagUrl: 'https://flagcdn.com/w20/ga.png' },
    { name: 'Gambia', code: '+220', flagUrl: 'https://flagcdn.com/w20/gm.png' },
    {
      name: 'Georgia',
      code: '+995',
      flagUrl: 'https://flagcdn.com/w20/ge.png',
    },
    { name: 'Germany', code: '+49', flagUrl: 'https://flagcdn.com/w20/de.png' },
    { name: 'Ghana', code: '+233', flagUrl: 'https://flagcdn.com/w20/gh.png' },
    {
      name: 'Gibraltar',
      code: '+350',
      flagUrl: 'https://flagcdn.com/w20/gi.png',
    },
    { name: 'Greece', code: '+30', flagUrl: 'https://flagcdn.com/w20/gr.png' },
    {
      name: 'Greenland',
      code: '+299',
      flagUrl: 'https://flagcdn.com/w20/gl.png',
    },
    {
      name: 'Grenada',
      code: '+1473',
      flagUrl: 'https://flagcdn.com/w20/gd.png',
    },
    {
      name: 'Guadeloupe',
      code: '+590',
      flagUrl: 'https://flagcdn.com/w20/gp.png',
    },
    { name: 'Guam', code: '+1671', flagUrl: 'https://flagcdn.com/w20/gu.png' },
    {
      name: 'Guatemala',
      code: '+502',
      flagUrl: 'https://flagcdn.com/w20/gt.png',
    },
    {
      name: 'Guernsey',
      code: '+44',
      flagUrl: 'https://flagcdn.com/w20/gg.png',
    },
    { name: 'Guinea', code: '+224', flagUrl: 'https://flagcdn.com/w20/gn.png' },
    {
      name: 'Guinea-Bissau',
      code: '+245',
      flagUrl: 'https://flagcdn.com/w20/gw.png',
    },
    { name: 'Guyana', code: '+592', flagUrl: 'https://flagcdn.com/w20/gy.png' },
    { name: 'Haiti', code: '+509', flagUrl: 'https://flagcdn.com/w20/ht.png' },
    {
      name: 'Honduras',
      code: '+504',
      flagUrl: 'https://flagcdn.com/w20/hn.png',
    },
    {
      name: 'Hong Kong',
      code: '+852',
      flagUrl: 'https://flagcdn.com/w20/hk.png',
    },
    { name: 'Hungary', code: '+36', flagUrl: 'https://flagcdn.com/w20/hu.png' },
    {
      name: 'Iceland',
      code: '+354',
      flagUrl: 'https://flagcdn.com/w20/is.png',
    },
    { name: 'India', code: '+91', flagUrl: 'https://flagcdn.com/w20/in.png' },
    {
      name: 'Indonesia',
      code: '+62',
      flagUrl: 'https://flagcdn.com/w20/id.png',
    },
    {
      name: 'Iran, Islamic Republic of',
      code: '+98',
      flagUrl: 'https://flagcdn.com/w20/ir.png',
    },
    { name: 'Iraq', code: '+964', flagUrl: 'https://flagcdn.com/w20/iq.png' },
    {
      name: 'Ireland',
      code: '+353',
      flagUrl: 'https://flagcdn.com/w20/ie.png',
    },
    {
      name: 'Isle of Man',
      code: '+44',
      flagUrl: 'https://flagcdn.com/w20/im.png',
    },
    { name: 'Israel', code: '+972', flagUrl: 'https://flagcdn.com/w20/il.png' },
    { name: 'Italy', code: '+39', flagUrl: 'https://flagcdn.com/w20/it.png' },
    {
      name: 'Jamaica',
      code: '+1876',
      flagUrl: 'https://flagcdn.com/w20/jm.png',
    },
    { name: 'Japan', code: '+81', flagUrl: 'https://flagcdn.com/w20/jp.png' },
    { name: 'Jersey', code: '+44', flagUrl: 'https://flagcdn.com/w20/je.png' },
    { name: 'Jordan', code: '+962', flagUrl: 'https://flagcdn.com/w20/jo.png' },
    {
      name: 'Kazakhstan',
      code: '+7',
      flagUrl: 'https://flagcdn.com/w20/kz.png',
    },
    { name: 'Kenya', code: '+254', flagUrl: 'https://flagcdn.com/w20/ke.png' },
    {
      name: 'Kiribati',
      code: '+686',
      flagUrl: 'https://flagcdn.com/w20/ki.png',
    },
    {
      name: "Korea, Democratic People's Republic of",
      code: '+850',
      flagUrl: 'https://flagcdn.com/w20/kp.png',
    },
    {
      name: 'Korea, Republic of',
      code: '+82',
      flagUrl: 'https://flagcdn.com/w20/kr.png',
    },
    { name: 'Kuwait', code: '+965', flagUrl: 'https://flagcdn.com/w20/kw.png' },
    {
      name: 'Kyrgyzstan',
      code: '+996',
      flagUrl: 'https://flagcdn.com/w20/kg.png',
    },
    { name: 'Laos', code: '+856', flagUrl: 'https://flagcdn.com/w20/la.png' },
    { name: 'Latvia', code: '+371', flagUrl: 'https://flagcdn.com/w20/lv.png' },
    {
      name: 'Lebanon',
      code: '+961',
      flagUrl: 'https://flagcdn.com/w20/lb.png',
    },
    {
      name: 'Lesotho',
      code: '+266',
      flagUrl: 'https://flagcdn.com/w20/ls.png',
    },
    {
      name: 'Liberia',
      code: '+231',
      flagUrl: 'https://flagcdn.com/w20/lr.png',
    },
    {
      name: 'Libyan Arab Jamahiriya',
      code: '+218',
      flagUrl: 'https://flagcdn.com/w20/ly.png',
    },
    {
      name: 'Liechtenstein',
      code: '+423',
      flagUrl: 'https://flagcdn.com/w20/li.png',
    },
    {
      name: 'Lithuania',
      code: '+370',
      flagUrl: 'https://flagcdn.com/w20/lt.png',
    },
    {
      name: 'Luxembourg',
      code: '+352',
      flagUrl: 'https://flagcdn.com/w20/lu.png',
    },
    { name: 'Macao', code: '+853', flagUrl: 'https://flagcdn.com/w20/mo.png' },
    {
      name: 'Macedonia, the Former Yugoslav Republic of',
      code: '+389',
      flagUrl: 'https://flagcdn.com/w20/mk.png',
    },
    {
      name: 'Madagascar',
      code: '+261',
      flagUrl: 'https://flagcdn.com/w20/mg.png',
    },
    { name: 'Malawi', code: '+265', flagUrl: 'https://flagcdn.com/w20/mw.png' },
    {
      name: 'Malaysia',
      code: '+60',
      flagUrl: 'https://flagcdn.com/w20/my.png',
    },
    {
      name: 'Maldives',
      code: '+960',
      flagUrl: 'https://flagcdn.com/w20/mv.png',
    },
    { name: 'Mali', code: '+223', flagUrl: 'https://flagcdn.com/w20/ml.png' },
    { name: 'Malta', code: '+356', flagUrl: 'https://flagcdn.com/w20/mt.png' },
    {
      name: 'Marshall Islands',
      code: '+692',
      flagUrl: 'https://flagcdn.com/w20/mh.png',
    },
    {
      name: 'Martinique',
      code: '+596',
      flagUrl: 'https://flagcdn.com/w20/mq.png',
    },
    {
      name: 'Mauritania',
      code: '+222',
      flagUrl: 'https://flagcdn.com/w20/mr.png',
    },
    {
      name: 'Mauritius',
      code: '+230',
      flagUrl: 'https://flagcdn.com/w20/mu.png',
    },
    {
      name: 'Mayotte',
      code: '+262',
      flagUrl: 'https://flagcdn.com/w20/yt.png',
    },
    { name: 'Mexico', code: '+52', flagUrl: 'https://flagcdn.com/w20/mx.png' },
    {
      name: 'Micronesia, Federated States of',
      code: '+691',
      flagUrl: 'https://flagcdn.com/w20/fm.png',
    },
    {
      name: 'Moldova, Republic of',
      code: '+373',
      flagUrl: 'https://flagcdn.com/w20/md.png',
    },
    { name: 'Monaco', code: '+377', flagUrl: 'https://flagcdn.com/w20/mc.png' },
    {
      name: 'Mongolia',
      code: '+976',
      flagUrl: 'https://flagcdn.com/w20/mn.png',
    },
    {
      name: 'Montenegro',
      code: '+382',
      flagUrl: 'https://flagcdn.com/w20/me.png',
    },
    {
      name: 'Montserrat',
      code: '+1664',
      flagUrl: 'https://flagcdn.com/w20/ms.png',
    },
    {
      name: 'Morocco',
      code: '+212',
      flagUrl: 'https://flagcdn.com/w20/ma.png',
    },
    {
      name: 'Mozambique',
      code: '+258',
      flagUrl: 'https://flagcdn.com/w20/mz.png',
    },
    { name: 'Myanmar', code: '+95', flagUrl: 'https://flagcdn.com/w20/mm.png' },
    {
      name: 'Namibia',
      code: '+264',
      flagUrl: 'https://flagcdn.com/w20/na.png',
    },
    { name: 'Nauru', code: '+674', flagUrl: 'https://flagcdn.com/w20/nr.png' },
    { name: 'Nepal', code: '+977', flagUrl: 'https://flagcdn.com/w20/np.png' },
    {
      name: 'Netherlands',
      code: '+31',
      flagUrl: 'https://flagcdn.com/w20/nl.png',
    },
    {
      name: 'Netherlands Antilles',
      code: '+599',
      flagUrl: 'https://flagcdn.com/w20/an.png',
    },
    {
      name: 'New Caledonia',
      code: '+687',
      flagUrl: 'https://flagcdn.com/w20/nc.png',
    },
    {
      name: 'New Zealand',
      code: '+64',
      flagUrl: 'https://flagcdn.com/w20/nz.png',
    },
    {
      name: 'Nicaragua',
      code: '+505',
      flagUrl: 'https://flagcdn.com/w20/ni.png',
    },
    { name: 'Niger', code: '+227', flagUrl: 'https://flagcdn.com/w20/ne.png' },
    {
      name: 'Nigeria',
      code: '+234',
      flagUrl: 'https://flagcdn.com/w20/ng.png',
    },
    { name: 'Niue', code: '+683', flagUrl: 'https://flagcdn.com/w20/nu.png' },
    {
      name: 'Norfolk Island',
      code: '+672',
      flagUrl: 'https://flagcdn.com/w20/nf.png',
    },
    {
      name: 'Northern Mariana Islands',
      code: '+1670',
      flagUrl: 'https://flagcdn.com/w20/mp.png',
    },
    { name: 'Norway', code: '+47', flagUrl: 'https://flagcdn.com/w20/no.png' },
    { name: 'Oman', code: '+968', flagUrl: 'https://flagcdn.com/w20/om.png' },
    {
      name: 'Pakistan',
      code: '+92',
      flagUrl: 'https://flagcdn.com/w20/pk.png',
    },
    { name: 'Palau', code: '+680', flagUrl: 'https://flagcdn.com/w20/pw.png' },
    {
      name: 'Palestine, State of',
      code: '+970',
      flagUrl: 'https://flagcdn.com/w20/ps.png',
    },
    { name: 'Panama', code: '+507', flagUrl: 'https://flagcdn.com/w20/pa.png' },
    {
      name: 'Papua New Guinea',
      code: '+675',
      flagUrl: 'https://flagcdn.com/w20/pg.png',
    },
    {
      name: 'Paraguay',
      code: '+595',
      flagUrl: 'https://flagcdn.com/w20/py.png',
    },
    { name: 'Peru', code: '+51', flagUrl: 'https://flagcdn.com/w20/pe.png' },
    {
      name: 'Philippines',
      code: '+63',
      flagUrl: 'https://flagcdn.com/w20/ph.png',
    },
    {
      name: 'Pitcairn',
      code: '+870',
      flagUrl: 'https://flagcdn.com/w20/pn.png',
    },
    { name: 'Poland', code: '+48', flagUrl: 'https://flagcdn.com/w20/pl.png' },
    {
      name: 'Portugal',
      code: '+351',
      flagUrl: 'https://flagcdn.com/w20/pt.png',
    },
    {
      name: 'Puerto Rico',
      code: '+1787',
      flagUrl: 'https://flagcdn.com/w20/pr.png',
    },
    { name: 'Qatar', code: '+974', flagUrl: 'https://flagcdn.com/w20/qa.png' },
    {
      name: 'Réunion',
      code: '+262',
      flagUrl: 'https://flagcdn.com/w20/re.png',
    },
    { name: 'Romania', code: '+40', flagUrl: 'https://flagcdn.com/w20/ro.png' },
    {
      name: 'Russian Federation',
      code: '+7',
      flagUrl: 'https://flagcdn.com/w20/ru.png',
    },
    { name: 'Rwanda', code: '+250', flagUrl: 'https://flagcdn.com/w20/rw.png' },
    {
      name: 'Saint Barthélemy',
      code: '+590',
      flagUrl: 'https://flagcdn.com/w20/bl.png',
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      code: '+290',
      flagUrl: 'https://flagcdn.com/w20/sh.png',
    },
    {
      name: 'Saint Kitts and Nevis',
      code: '+1869',
      flagUrl: 'https://flagcdn.com/w20/kn.png',
    },
    {
      name: 'Saint Lucia',
      code: '+1758',
      flagUrl: 'https://flagcdn.com/w20/lc.png',
    },
    {
      name: 'Saint Martin (French part)',
      code: '+590',
      flagUrl: 'https://flagcdn.com/w20/mf.png',
    },
    {
      name: 'Saint Pierre and Miquelon',
      code: '+508',
      flagUrl: 'https://flagcdn.com/w20/pm.png',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      code: '+1784',
      flagUrl: 'https://flagcdn.com/w20/vc.png',
    },
    { name: 'Samoa', code: '+685', flagUrl: 'https://flagcdn.com/w20/ws.png' },
    {
      name: 'San Marino',
      code: '+378',
      flagUrl: 'https://flagcdn.com/w20/sm.png',
    },
    {
      name: 'Sao Tome and Principe',
      code: '+239',
      flagUrl: 'https://flagcdn.com/w20/st.png',
    },
    {
      name: 'Saudi Arabia',
      code: '+966',
      flagUrl: 'https://flagcdn.com/w20/sa.png',
    },
    {
      name: 'Senegal',
      code: '+221',
      flagUrl: 'https://flagcdn.com/w20/sn.png',
    },
    { name: 'Serbia', code: '+381', flagUrl: 'https://flagcdn.com/w20/rs.png' },
    {
      name: 'Seychelles',
      code: '+248',
      flagUrl: 'https://flagcdn.com/w20/sc.png',
    },
    {
      name: 'Sierra Leone',
      code: '+232',
      flagUrl: 'https://flagcdn.com/w20/sl.png',
    },
    {
      name: 'Singapore',
      code: '+65',
      flagUrl: 'https://flagcdn.com/w20/sg.png',
    },
    {
      name: 'Slovakia',
      code: '+421',
      flagUrl: 'https://flagcdn.com/w20/sk.png',
    },
    {
      name: 'Slovenia',
      code: '+386',
      flagUrl: 'https://flagcdn.com/w20/si.png',
    },
    {
      name: 'Solomon Islands',
      code: '+677',
      flagUrl: 'https://flagcdn.com/w20/sb.png',
    },
    {
      name: 'Somalia',
      code: '+252',
      flagUrl: 'https://flagcdn.com/w20/so.png',
    },
    {
      name: 'South Africa',
      code: '+27',
      flagUrl: 'https://flagcdn.com/w20/za.png',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: '+500',
      flagUrl: 'https://flagcdn.com/w20/gs.png',
    },
    {
      name: 'South Sudan',
      code: '+211',
      flagUrl: 'https://flagcdn.com/w20/ss.png',
    },
    { name: 'Spain', code: '+34', flagUrl: 'https://flagcdn.com/w20/es.png' },
    {
      name: 'Sri Lanka',
      code: '+94',
      flagUrl: 'https://flagcdn.com/w20/lk.png',
    },
    { name: 'Sudan', code: '+249', flagUrl: 'https://flagcdn.com/w20/sd.png' },
    {
      name: 'Suriname',
      code: '+597',
      flagUrl: 'https://flagcdn.com/w20/sr.png',
    },
    {
      name: 'Svalbard and Jan Mayen',
      code: '+47',
      flagUrl: 'https://flagcdn.com/w20/sj.png',
    },
    {
      name: 'Swaziland',
      code: '+268',
      flagUrl: 'https://flagcdn.com/w20/sz.png',
    },
    { name: 'Sweden', code: '+46', flagUrl: 'https://flagcdn.com/w20/se.png' },
    {
      name: 'Switzerland',
      code: '+41',
      flagUrl: 'https://flagcdn.com/w20/ch.png',
    },
    {
      name: 'Syrian Arab Republic',
      code: '+963',
      flagUrl: 'https://flagcdn.com/w20/sy.png',
    },
    {
      name: 'Taiwan, Province of China',
      code: '+886',
      flagUrl: 'https://flagcdn.com/w20/tw.png',
    },
    {
      name: 'Tajikistan',
      code: '+992',
      flagUrl: 'https://flagcdn.com/w20/tj.png',
    },
    {
      name: 'Tanzania, United Republic of',
      code: '+255',
      flagUrl: 'https://flagcdn.com/w20/tz.png',
    },
    {
      name: 'Thailand',
      code: '+66',
      flagUrl: 'https://flagcdn.com/w20/th.png',
    },
    {
      name: 'Timor-Leste',
      code: '+670',
      flagUrl: 'https://flagcdn.com/w20/tl.png',
    },
    { name: 'Togo', code: '+228', flagUrl: 'https://flagcdn.com/w20/tg.png' },
    {
      name: 'Tokelau',
      code: '+690',
      flagUrl: 'https://flagcdn.com/w20/tk.png',
    },
    { name: 'Tonga', code: '+676', flagUrl: 'https://flagcdn.com/w20/to.png' },
    {
      name: 'Trinidad and Tobago',
      code: '+1868',
      flagUrl: 'https://flagcdn.com/w20/tt.png',
    },
    {
      name: 'Tunisia',
      code: '+216',
      flagUrl: 'https://flagcdn.com/w20/tn.png',
    },
    { name: 'Turkey', code: '+90', flagUrl: 'https://flagcdn.com/w20/tr.png' },
    {
      name: 'Turkmenistan',
      code: '+993',
      flagUrl: 'https://flagcdn.com/w20/tm.png',
    },
    {
      name: 'Turks and Caicos Islands',
      code: '+1649',
      flagUrl: 'https://flagcdn.com/w20/tc.png',
    },
    { name: 'Tuvalu', code: '+688', flagUrl: 'https://flagcdn.com/w20/tv.png' },
    { name: 'Uganda', code: '+256', flagUrl: 'https://flagcdn.com/w20/ug.png' },
    {
      name: 'Ukraine',
      code: '+380',
      flagUrl: 'https://flagcdn.com/w20/ua.png',
    },
    {
      name: 'United Arab Emirates',
      code: '+971',
      flagUrl: 'https://flagcdn.com/w20/ae.png',
    },
    {
      name: 'United Kingdom',
      code: '+44',
      flagUrl: 'https://flagcdn.com/w20/gb.png',
    },
    {
      name: 'United States Minor Outlying Islands',
      code: '+1',
      flagUrl: 'https://flagcdn.com/w20/um.png',
    },
    {
      name: 'United States',
      code: '+1',
      flagUrl: 'https://flagcdn.com/w20/us.png',
    },
    {
      name: 'Uruguay',
      code: '+598',
      flagUrl: 'https://flagcdn.com/w20/uy.png',
    },
    {
      name: 'Uzbekistan',
      code: '+998',
      flagUrl: 'https://flagcdn.com/w20/uz.png',
    },
    {
      name: 'Vanuatu',
      code: '+678',
      flagUrl: 'https://flagcdn.com/w20/vu.png',
    },
    {
      name: 'Venezuela',
      code: '+58',
      flagUrl: 'https://flagcdn.com/w20/ve.png',
    },
    {
      name: 'Viet Nam',
      code: '+84',
      flagUrl: 'https://flagcdn.com/w20/vn.png',
    },
    {
      name: 'Virgin Islands, British',
      code: '+1284',
      flagUrl: 'https://flagcdn.com/w20/vg.png',
    },
    {
      name: 'Virgin Islands, U.S.',
      code: '+1340',
      flagUrl: 'https://flagcdn.com/w20/vi.png',
    },
    {
      name: 'Wallis and Futuna',
      code: '+681',
      flagUrl: 'https://flagcdn.com/w20/wf.png',
    },
    {
      name: 'Western Sahara',
      code: '+212',
      flagUrl: 'https://flagcdn.com/w20/eh.png',
    },
    { name: 'Yemen', code: '+967', flagUrl: 'https://flagcdn.com/w20/ye.png' },
    { name: 'Zambia', code: '+260', flagUrl: 'https://flagcdn.com/w20/zm.png' },
    {
      name: 'Zimbabwe',
      code: '+263',
      flagUrl: 'https://flagcdn.com/w20/zw.png',
    },
  ];

  filteredCountries: Country[] = [...this.countries];
  selectedCountry: Country | null = null;
  isDropdownOpen = false;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.filteredCountries = [...this.countries];
    }
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }

  filterCountries(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCountries = this.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue) ||
        country.code.toLowerCase().includes(filterValue)
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Your message has been sent!');
      this.contactForm.reset();
      this.submitted = false;
      this.selectedCountry = null;
    }
  }
}
