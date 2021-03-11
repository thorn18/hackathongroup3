package com.characterApi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="battle_character")
public class BattleCharacter {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Column(name="char_name")
	private String charName;
	
//	@Column(name="char_isHero")
//	private boolean charIsHero;
	
	
	@Column(name="char_strength")
	private int charStrength;
	
	@Column(name="char_hp")
	private double charHp;
	
	@Column(name="char_dex")
	private double charDex;
	
	@Column(name="char_image")
	private String charImage;

	public int getId() {
		return id;
	}

	public String getCharName() {
		return charName;
	}

	public int getCharStrength() {
		return charStrength;
	}

	public double getCharHp() {
		return charHp;
	}

	public double getCharDex() {
		return charDex;
	}

	public String getCharImage() {
		return charImage;
	}

	
	
	public BattleCharacter() {
		super();

	}

	public BattleCharacter(String charName, int charStrength, double charHp, double charDex, String charImage) {
		super();
		this.charName = charName;
		this.charStrength = charStrength;
		this.charHp = charHp;
		this.charDex = charDex;
		this.charImage = charImage;
	}

	@Override
	public String toString() {
		return "BattleCharacter [id=" + id + ", charName=" + charName + ", charStrength=" + charStrength + ", charHp="
				+ charHp + ", charDex=" + charDex + ", charImage=" + charImage + "]";
	}
	
	
}
