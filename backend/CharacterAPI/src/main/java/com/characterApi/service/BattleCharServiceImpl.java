package com.characterApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.characterApi.dao.BattleCharDao;
import com.characterApi.model.BattleCharacter;

@Service
public class BattleCharServiceImpl implements BattleCharService {

	
	@Autowired
	BattleCharDao battleCharDao;	
	
	@Autowired
	public BattleCharServiceImpl(BattleCharDao battleCharDao) {
		super();
		this.battleCharDao = battleCharDao;
	}
	
	@Override
	public List<BattleCharacter> findAll() {
		
		return battleCharDao.findAll();
	}

	@Override
	public BattleCharacter findBattleCharacterById(int id) {
		
		return battleCharDao.findBattleCharacterById(id);
	}

	@Override
	public void createBattleCharacter(BattleCharacter battleCharacter) {
		
		battleCharDao.save(battleCharacter);
	}

	@Override
	public void deleteBattleCharacterById(int id) {
		battleCharDao.deleteById(id);

	}

	@Override
	public void updateBattleCharacter(BattleCharacter battleCharacter) {
		
		BattleCharacter originalCharacter = battleCharDao.findBattleCharacterById(battleCharacter.getId());
		System.out.println(battleCharacter);
		battleCharDao.save(battleCharacter);
	}

}
